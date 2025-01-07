import SideNav from "../components/SideNav.jsx";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <SideNav />
      <Outlet />
    </div>
  );
};

export default Layout;
