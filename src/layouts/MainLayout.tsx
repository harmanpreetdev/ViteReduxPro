import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

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
