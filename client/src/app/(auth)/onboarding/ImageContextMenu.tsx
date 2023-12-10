import { ImageContextMenuOptions } from "@/app/constants/InitialValues";
import React, { FC, Dispatch, SetStateAction, useRef, useEffect } from "react";

interface ImageContextMenuPropsType {
  coordinates: { x: number; y: number };
  setShowProfileSelectMenu: Dispatch<SetStateAction<boolean>>;
}
const ImageContextMenu: FC<ImageContextMenuPropsType> = ({
  coordinates,
  setShowProfileSelectMenu,
}) => {
  const ImageContextMenuRef = useRef(null);

  const handleClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    callback: () => void
  ) => {
    e.preventDefault();
    callback();
    setShowProfileSelectMenu(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      console.log({ id: e.target.id });
      if (e.target.id !== "context-opener") {
        {
          setShowProfileSelectMenu(false);
        }
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
  return (
    <div
      className="bg-slate-700 fixed py-2 z-[100] shadown-xl"
      style={{ top: coordinates.y, left: coordinates.x }}
    >
      <ul>
        {ImageContextMenuOptions.map(({ name, callback }) => (
          <li key={name} onClick={(e) => handleClick(e, callback)}>
            <span className="cursor-pointer text-white">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageContextMenu;
