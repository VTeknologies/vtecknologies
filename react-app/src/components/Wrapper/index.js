import Header from "../Header/index";
import Footer from "../Footer/index";
import Contact from "../Contact/index";
import { Outlet } from "react-router-dom";
import Clients from "../Clients";

const Wrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
};

export default Wrapper;
