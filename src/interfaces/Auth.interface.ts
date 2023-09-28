import { User ,UserCredential} from "firebase/auth";
import Prettify from "./Prettify";
export default interface AuthInterface {
  user?: Prettify<User>|null;
  isError?: Error;
  isLoading: boolean;
  signIn:()=>Promise<void>,
  signOut:()=>Promise<void>
}
