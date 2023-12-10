export const USER_DETAIL_INIT_VALUE = {
  name: "",
  email: "",
  profileImage: "",
  status: "",
  newUser: true,
};

export const ImageContextMenuOptions = [
  {
    name: "Take Photo",
    callback: () => {
      console.log("Take Photo");
    },
  },
  {
    name: "Choose",
    callback: () => {
      console.log("Choose");
    },
  },
  {
    name: "Upload",
    callback: () => {
      console.log("upload");
    },
  },
  {
    name: "Remove Photo",
    callback: () => {},
  },
];
