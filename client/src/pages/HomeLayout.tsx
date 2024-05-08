import { Header, Navbar, Footer } from "@/components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <body className="text-grey flex-1">
        <Navbar />
        <div className=" align-element content">
          <Outlet />
        </div>
      </body>
      <Footer />
    </>
  );
};
export default HomeLayout;
