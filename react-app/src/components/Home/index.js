import Hero from "../Hero";
import Product from "../Products";
import ValueProposition from "../ValueProposition";
import WhyChooseUs from "../WhyChooseUs";
import SocialProof from "../SocialProof";
import BottomCTA from "../BottomCTA";
import useSEO from "../../hooks/useSEO";

const Home = () => {
  useSEO({
    title: "Home",
    description: "VTecknologies builds powerful apps and integrations for Freshworks, Zoho, Zendesk, and other SaaS platforms. Automate workflows and improve team productivity."
  });

  return (
    <>
      <Hero />
      <ValueProposition />
      <Product />
      <WhyChooseUs />
      <SocialProof />
      <BottomCTA />
    </>
  );
};

export default Home;
