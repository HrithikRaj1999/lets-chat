import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
const login = () => {
  return (
    <div className="flex justify-center items-center bg-slate-700 h-screen w-screen flex-col gap-6">
      <div className="flex flex-col items-center justify-center">
        <Image src="/lets-chat.png"  className='rounded-sm p-0 m-0'alt="lets-chat" width={300} height={300} />
        <button className="flex  items-center justify-center gap-7 bg-black   p-2 rounded-md">
          <FcGoogle/>
          <span className="text-white text-md">Login With Google</span>
        </button>
      </div>
    </div>
  );
};

export default login;
