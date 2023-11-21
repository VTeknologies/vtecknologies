import Wrapper from "../Wrapper/index";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <Wrapper>
    <section data-aos="fade-down" className="container max-w-screen-xl mx-auto">
      <div className="py-12 grid grid-cols-6 lg:grid-cols-12 gap-y-8 lg:gap-y-0 lg:gap-x-8">
        <div className="col-span-9 space-y-4">
          <img
            src={process.env.PUBLIC_URL + "/assets/logo.png"}
            className="w-9 h-9"
            alt=""
          />
          <h5 className="text-xl font-bold text-[#094067]">VTecknologies</h5>
        </div>
        <div className="col-span-3 sm:col-span-2">
          <h6 className="text-[#094067] text-sm font-bold uppercase tracking-wide mb-5">
            Contact
          </h6>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:support@vtecknologies.com"
                className="text-[#5F6C7B] hover:text-[#33393f] transition duration-300"
              >
                support@vtecknologies.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-12 border-t border-[rgba(144,180,206,0.25)] text-center text-sm font-bold tracking-wide uppercase text-[#5F6C7B]">
        <div className="flex justify-center gap-x-6">
          <Link to="/app/terms">Terms of Use</Link>
          <Link to="/app/privacy">Privacy Policy</Link>
        </div>
      </div>
      <div className="py-12 border-t border-[rgba(144,180,206,0.25)] text-center text-sm font-bold tracking-wide uppercase text-[#5F6C7B]">
        COPYRIGHT @VTecknologies
      </div>
    </section>
    // </Wrapper>
  );
};

export default Footer;
