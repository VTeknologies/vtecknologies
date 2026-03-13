import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const BottomCTA = () => {
  return (
    <section
      id="bottom-cta"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-screen-xl mx-auto px-4 py-16"
    >
      <div className="bg-gradient-to-r from-[#094067] to-[#0a5a8a] rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
          Ready to Get More From Your SaaS Stack?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Whether you need a specific integration or want to explore what's possible, we're here to help.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/all"
            className="px-8 py-3 bg-[#EF4565] text-white font-bold rounded-lg shadow-lg hover:bg-[#d93d5a] transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Browse All Products
          </Link>
          <HashLink
            to="/app/#contactme"
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#094067] transition-all duration-300 w-full sm:w-auto text-center"
          >
            Contact Us
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
