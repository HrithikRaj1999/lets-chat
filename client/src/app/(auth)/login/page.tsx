"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useLogin } from "@/hooks/useLogin";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { handleLogin } = useLogin();
  return (
    <MaxWidthWrapper>
      {" "}
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <Image
          src="/lets-chat.png"
          className="rounded-sm p-0 m-0"
          alt="lets-chat"
          width={400}
          height={400}
        />
        <button
          className="flex  items-center justify-center gap-x-7 bg-black p-4 rounded-md"
          onClick={handleLogin}
        >
          <FcGoogle />
          <span className="text-white text-md">Login With Google</span>
        </button>
      </div>
    </MaxWidthWrapper>
  );
};

export default Login;
