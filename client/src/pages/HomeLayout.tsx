import { Header, Navbar, Footer } from "@/components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className="text-grey flex-1 h-screen flex-col m-0 p-0">
        <Navbar />
        <div className=" align-element content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HomeLayout;
