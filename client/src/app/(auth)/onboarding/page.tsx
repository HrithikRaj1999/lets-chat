import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";
import SignUpForm from "./LoginForm";


const page = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col h-screen items-center max-w-3xl">
        <span className="text-2xl text-white">Create Your Profile</span>
        <div className="flex gap-6 mt-6">
          <SignUpForm />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
