import { House, MessageCircle, BellDot, MonitorCog } from "lucide-react";
import { Link } from "lucide-react";

const SideNav = () => {
  return (
    // mobile navigation
    <nav className="w-screen h-20 bg-gradient-to-r from-blue-900  to-pink-900">
      <Link></Link>
      <House />
      <MessageCircle />
      <BellDot />
      <MonitorCog />
    </nav>
  );
};

export default SideNav;
