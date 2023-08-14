import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Home } from "./pages/home/home";
import { MyImages } from "./pages/my-images/my-images";
import { ImageDetail } from "./pages/image-detail/image-detail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/images" element={<Home />} />
        <Route path="/images/:id" element={<ImageDetail />} />
        <Route path="/my-images" element={<MyImages />} />
        <Route path="/" element={<Login />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}
