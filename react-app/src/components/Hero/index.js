import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <section
      id="hero-section"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-screen-xl mx-auto mb-10 flex flex-col lg:flex-row items-center"
    >
      <div className="block md:hidden lg:hidden mb-4" id="mobile-image">
        <img
          src={process.env.PUBLIC_URL + "/assets/hero-image.jpg"}
          alt="VTecknologies - SaaS Integration Solutions"
          className="object-cover w-full h-auto"
        />
      </div>

      <div className="flex-1 text-left px-4 lg:px-0 flex flex-col">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl mb-4 md:mb-6 font-extrabold text-[#094067] leading-tight">
          Extend the Power of Your SaaS Tools
        </h1>
        <p className="mb-8 text-base md:text-lg tracking-wide leading-8 font-medium text-[#5F6C7B] pr-0 md:pr-4 xl:pr-32">
          VTecknologies builds powerful apps and integrations that enhance Freshworks, Zoho, Zendesk, and other leading SaaS platforms. Automate workflows, improve productivity, and unlock new capabilities for your team.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <Link
            to="/all"
            className="px-8 py-3 bg-[#EF4565] text-white font-bold rounded-lg shadow-lg hover:bg-[#d93d5a] transition-all duration-300 hover:shadow-xl w-full sm:w-auto text-center"
          >
            Explore Our Apps
          </Link>
          <HashLink
            to="/app/#contactme"
            className="px-8 py-3 border-2 border-[#D687EB] text-[#D687EB] font-bold rounded-lg hover:bg-[#D687EB] hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
          >
            Contact Us
          </HashLink>
        </div>
      </div>

      <div className="hidden md:flex lg:flex lg:flex-1 items-center justify-center pl-24" id="desktop-image">
        <img
          src={process.env.PUBLIC_URL + "/assets/hero-image.jpg"}
          alt="VTecknologies - SaaS Integration Solutions"
          className="object-contain w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
