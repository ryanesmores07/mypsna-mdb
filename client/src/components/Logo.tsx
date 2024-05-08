import { Link } from "react-router-dom";
import "../utils/animations.css"

const Logo = () => {
  return (
    <Link
      to="/"
      className=" justify-center items-center  rounded-lg mx-auto"
    >
      <div className="tracking-in-expand text-primary logo-font">MyPSNA.mdb</div>
    </Link>
  );
};
export default Logo;
