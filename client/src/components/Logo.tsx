import { Link } from "react-router-dom";
import { List, ListMusic } from "lucide-react";
import logo from "../assets/logo/myPSNA.mdb.svg";
import "../utils/animations.css"

const Logo = () => {
  return (
    <Link
      to="/"
      className=" justify-center items-center  rounded-lg mx-auto"
    >
      <div className="tracking-in-expand logo-font">MyPSNA.mdb</div>
    </Link>
  );
};
export default Logo;
