"use client";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { FaCamera, FaEdit, FaEye } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import ImageContextMenu from "./ImageContextMenu";
const LOGIN_FORM_INIT_VAl = {
  displayName: "Hrithik Raj",
  about: "I am a very good boy, I love music and dance",
};
const SignUpForm = () => {
  const [showProfileSelectMenu, setShowProfileSelectMenu] = useState(false);
  const [coordinates, setCoordinate] = useState({ x: 0, y: 0 });
  const handleShowContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log("context menu clicked");
    e.preventDefault();
    console.log({ x: e.pageX, y: e.pageY });
    setCoordinate({ x: e.pageX, y: e.pageY });
    setShowProfileSelectMenu(true);
  };

  return (
    <Formik
      initialValues={LOGIN_FORM_INIT_VAl}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, handleSubmit, handleChange }) => (
        <>
          <Form className="flex gap-x-7 ">
            <div className="flex flex-col">
              <div className="relative mb-2">
                <div className="w-full flex justify-center items-center ">
                  <Image
                    src={"/default-profile-pic.png"}
                    width={150}
                    height={150}
                    className="cursor-pointer transition duration-100"
                    alt={"profile pic"}
                    id="context-opener"
                  />
                  <div
                  onClick={handleShowContextMenu} 
                    id="context-opener"
                    className="absolute flex flex-col w-full cursor-pointer inset-0 bg-black bg-opacity-0  items-center justify-center opacity-0 transition duration-100 hover:bg-opacity-50 hover:opacity-100"
                  >
                    <FaCamera   id="context-opener" color={"white"} size={20} />
                  </div>
                </div>
              </div>
              <div className=" flex flex-col rounded-lg bg-slate-700 gap-5 p-4 ">
                <label className="text-white text-xl ">Display name</label>
                <Field
                  type="text"
                  name="displayName"
                  className="  rounded-lg px-3 py-1"
                />
                <label className="text-white text-xl">About</label>
                <Field
                  type="textarea"
                  name="about"
                  className=" rounded-lg px-3 py-1"
                />
                <button
                  type="submit"
                  className="rounded-md w-full bg-green-200 px-3   py-1"
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
          {showProfileSelectMenu ? (
            <ImageContextMenu
              coordinates={coordinates}
              setShowProfileSelectMenu={setShowProfileSelectMenu}
            />
          ) : null}
        </>
      )}
    </Formik>
  );
};

export default SignUpForm;
