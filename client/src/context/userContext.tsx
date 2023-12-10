"use client"
import { USER_DETAIL_INIT_VALUE } from "@/app/constants/InitialValues";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";


export const UserContext = createContext({} as UserContextType)
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [userDetails, setUserDetails] = useState<UserDetailsType>(
    USER_DETAIL_INIT_VALUE
  );
  console.log(userDetails)
  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserProvider = () => useContext(UserContext);
