import Wrapper from "../Wrapper";
import Hero from "../Hero";
import Product from "../Products";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <Wrapper> */}
      {/* {Outlet} */}
      <Hero />
      <Product />
      {/* </Wrapper> */}
    </>
  );
};

export default Home;
