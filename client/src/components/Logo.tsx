import { Link } from "react-router-dom";
import { List, ListMusic } from "lucide-react";
import logo from "../assets/logo/myPSNA.mdb.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="hidden lg:flex justify-center items-center  rounded-lg mx-auto"
    >
      <img src={logo} alt="logo" className="w-40" />
    </Link>
  );
};
export default Logo;
