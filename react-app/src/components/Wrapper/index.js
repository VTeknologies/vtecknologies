import Header from "../Header/index";
import Footer from "../Footer/index";
import Contact from "../Contact/index";
import { Outlet } from "react-router-dom";

const Wrapper = ({ children }) => {
  return (
    <main class="max-w-screen-xl mx-auto overflow-x-hidden px-4 sm:px-5">
      <Header />
      {children}
      <Contact />
      <Footer />
    </main>
  );
};

export default Wrapper;
