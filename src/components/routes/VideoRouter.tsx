import { Routes, Route,Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Video from "../../pages/Video";

export default function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/videos"/>}/>
      <Route path="/videos" element={<Home/>}/>
      <Route path="/videos/:id" element={<Video/>}/>
    </Routes>
  );
}
