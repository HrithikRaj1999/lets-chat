import { RequestHandler } from "express";
import { getPrismaInstance } from "../utils/PrismaClient";
import { STATUS } from "../constants/STATUS_CODES";

interface loginControllerReqBodyType {
  email?: string;
}
export const loginController: RequestHandler<
  unknown,
  unknown,
  loginControllerReqBodyType,
  unknown
> = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email)
      return res
        .status(STATUS.NOT_FOUND)
        .send({ success: false, message: "Email Required" });

    const prisma = getPrismaInstance();
    const user = await prisma.user.findUnique({ where: { email } });
    return !user
      ? res
          .status(STATUS.NO_CONTENT)
          .send({ success: false, message: "No User Found " })
      : res
          .status(STATUS.FOUND)
          .send({ success: true, message: "User Found ", data: user });
  } catch (error) {
    next(error);
  }
};
