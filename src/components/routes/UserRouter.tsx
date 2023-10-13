import { Routes, Route, Navigate } from "react-router-dom";
// import PrivateRoute from "../PrivateRoute";
import SignIn from "../../pages/SignIn";

export default function UserRouter() {
  return (
    <Routes>
      <Route path="/signin" Component={SignIn} />
    </Routes>
  );
}
