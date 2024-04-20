import { Footerr, Header } from "../components";
import { Outlet } from "react-router-dom";
const RootLevel = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footerr />
    </div>
  );
};

export default RootLevel;
