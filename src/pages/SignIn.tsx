import { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { auth } from "../services/firebase";
import { GoogleAuthProvider } from "firebase/auth";
const SignIn = () => {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Firebase UI Config
    const uiConfig:firebaseui.auth.Config = {
      // Configure your Firebase UI options here
      // For example:
      signInFlow: "popup",
      signInSuccessUrl:"/",
      signInOptions: [
        // List the authentication providers you want to support
        GoogleAuthProvider.PROVIDER_ID
      ]
    };

    // Create a firebaseUI instance.
    const firebaseUiWidget =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    if (elementRef.current) {
      if (uiConfig.signInFlow === "popup") {
        firebaseUiWidget.reset();
      }

      // Track the auth state to reset firebaseUi if the user signs out.
      const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
        if (!user && userSignedIn) {
          firebaseUiWidget.reset();
        }
        setUserSignedIn(!!user);
      });

      // Render the firebaseUi Widget.
      firebaseUiWidget.start(elementRef.current, uiConfig);
      return () => {
        unregisterAuthObserver();
        firebaseUiWidget.reset();
      };
    }
  }, []);

  return <div className="your-className" ref={elementRef} id="sign"/>;
};

export default SignIn;
