import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { LOGIN_USER } from "@/utils/ApiRoutes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUserProvider } from "@/context/userContext";

export const useLogin = () => {
  const router = useRouter();
  const { userDetails, setUserDetails } = useUserProvider();
  const handleLogin = async () => {
    try {
      const {
        user: { displayName: name, email, photoURL: profileImage },
      } = await signInWithPopup(firebaseAuth, new GoogleAuthProvider());
      if (email) {
        const { data } = await axios.post(LOGIN_USER, { email });
        if (data.success) {
          setUserDetails({
            name,
            email,
            profileImage,
            status: "",
            newUser: false,
          });
        } else {
          router.push("/onboarding");
          setUserDetails({
            name,
            email,
            profileImage,
            status: "",
            newUser: true,
          });
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.warn(error.message);
      }
    }
  };
  return { handleLogin };
};
