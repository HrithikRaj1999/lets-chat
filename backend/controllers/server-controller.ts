import { spawn } from "child_process";
export const startServer = () => {
  try {
    console.log(`Server started on port ${process.env.SERVER_PORT}`);

    // Start Prisma Studio
    const prismaStudio = spawn("npx", ["prisma", "studio"], { shell: true });

    // Optional: Log Prisma Studio output to the console
    prismaStudio.stdout.on("data", (data) => {
      console.log(`Prisma Studio: ${data}`);
    });

    prismaStudio.stderr.on("data", (data) => {
      console.error(`Prisma Studio Error: ${data}`);
    });

    prismaStudio.on("close", (code) => {
      console.log(`Prisma Studio process exited with code ${code}`);
    });
  } catch (error) {
    console.log(error);
  }
};
