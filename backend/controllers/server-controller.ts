
import dotenv from "dotenv";
dotenv.config();
export const startServer = () => {
  try {
    console.log(`Server started on port ${process.env.SERVER_PORT}`);
  } catch (error) {
    console.log(error);
  }
};
