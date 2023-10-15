import { createContext, useContext } from "react";
import {
  useSignInWithGoogle,
  useSignOut,
  useAuthState,
} from "react-firebase-hooks/auth";
import AuthInterface from "../interfaces/Auth.interface";
import { auth } from "../services/firebase";
import Prettify from "../interfaces/Prettify";
import ChildrenProp from "../interfaces/ChildrenProps";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<Prettify<AuthInterface> | null>(null);
export const useAuthContext = () =>
  useContext(AuthContext) as Prettify<AuthInterface>;

export default function AuthContextProvider({ children }: ChildrenProp) {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const [signOutUser] = useSignOut(auth);
  const [user, isLoading, isError] = useAuthState(auth);

  const nav = useNavigate();
  async function signIn() {
    try {
      const credential = await signInWithGoogle();
      const idToken = await credential?.user.getIdToken()
      // do some actions
      nav("/");
    } catch (error) {
      alert("error");
    }
    // const provider = new GoogleAuthProvider()
    // return signInWithRedirect(auth,provider)
  }

  async function signOut() {
    await signOutUser();
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, isError, signIn, signOut }}>
      {isLoading ? <h3>Loading.....</h3> : children}
    </AuthContext.Provider>
  );
}
