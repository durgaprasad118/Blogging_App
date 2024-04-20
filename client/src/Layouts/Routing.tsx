import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLevel from "./RootLevel";
import { Home, Login, Signup } from "../pages";
import { Blogs } from "../pages/Blogs";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLevel></RootLevel>}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
