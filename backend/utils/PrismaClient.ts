import { PrismaClient } from "@prisma/client";

let prismaInstance: PrismaClient | null = null;

export const getPrismaInstance = () => {
  return prismaInstance ?? new PrismaClient();
};
