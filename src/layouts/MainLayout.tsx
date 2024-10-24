import { Outlet } from "react-router-dom";
import { Header, Sidebar, Footer } from "@/components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
