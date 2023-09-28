import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Video from "../../pages/Video";
import PrivateRoute from "../PrivateRoute";
import SignIn from "../../pages/SignIn";

export default function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/videos" />} />
      <Route path="/videos" element={<PrivateRoute element={<Home />} />} />
      <Route path="/videos/:id" element={<Video />} />
      <Route path="/signin" Component={SignIn} />
    </Routes>
  );
}
