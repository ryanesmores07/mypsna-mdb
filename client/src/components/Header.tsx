import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getUserLanguage } from '../lib/languageDetect';
import { logoutUser } from "../features/user/userSlice";
import { useToast } from "./ui/use-toast";

function Header() {
  const userLanguage = getUserLanguage();
  const isJp = userLanguage === "ja";
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const user = useAppSelector((state) => state.userState.user);
  const handleLogout = () => {
    dispatch(logoutUser());
    toast({ description: "Logged Out" });
    navigate("/");
  };
  return (
    <header>
      <div className=" align-element flex justify-center sm:justify-end py-2">
        {/* USER */}

        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            {isJp ? (<p className="text-xs sm:text-sm">こんにちは, {user.username}</p>) : (<p className="text-xs sm:text-sm">Hello, {user.username}</p>)}
            {isJp ? (<Button variant="link" size="sm" onClick={handleLogout}>
              ログアウト
            </Button>) : (<Button variant="link" size="sm" onClick={handleLogout}>
              Logout
            </Button>)}

          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center ">
            <Button asChild variant="link" size="sm">
              {isJp ? (<Link to="/login">サインイン / ゲスト</Link>) : (<Link to="/login">Sign in / Guest</Link>)}
            </Button>

            <Button asChild variant="link" size="sm">
            {isJp ? (<Link to="/register">登録</Link>) : (<Link to="/register">Register</Link>)}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
