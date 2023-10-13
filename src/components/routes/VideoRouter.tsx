import { Routes, Route, Navigate } from "react-router-dom";
import Video from "../../pages/Video";
import Home from "../../pages/Home";
export default function VideoRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/videos" />} />
      <Route path="/videos" element={<Home />} />
      <Route path="/videos/:id" element={<Video />} />
    </Routes>
  );
}
