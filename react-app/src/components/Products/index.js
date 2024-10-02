import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../../App.css"

const Product = () => {
  
  return (
    <>
      <div id="myproduct"></div>
      <section
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="py-2 mb-16 text-center lg:text-left max-w-screen-xl mx-auto mb-8"
      >
        <div className="lg:flex md:flex items-center justify-between mb-8 lg:mb-5">
          <h3 className="text-[20px] sm:text-3xl md:text-4xl lg:text-4xl  text-[#094067] font-extrabold leading-tight w-full lg:w-fit pb-8">
            Our Top products
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-12 lg:gap-y-0 lg:gap-x-12 mb-8">
          <div className="col-span-1 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition duration-250 ">
            <Link smooth to="/app/todo" title="Click to See more info">
              <img
                src={process.env.PUBLIC_URL + "/assets/apps/todo.jpg"}
                className="h-[85%] sm:h-[80%] lg:h-[100%] aspect-video lg:aspect-auto object-cover object-center mb-4 rounded-xl shadow-[0_9px_40px_rgba(9,64,103,0.20)] cursor-pointer"
                alt=""
              />
            </Link>
            <h5 className="text-xl text-[#094067] font-bold mb-3.5 mt-3.5">
              Tasks Todo
            </h5>
            <p className="text-sm text-[#5F6C7B] font-medium">
              <a
                href="https://www.freshworks.com/apps/freshdesk/task_master/"
                target="_blank"
              >
                FreshDesk
              </a>
            </p>
          </div>

          <div className="col-span-1 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition duration-250 ">
            <Link smooth to="/twilio" title="Click to See more info">
              <img
                src={process.env.PUBLIC_URL + "/assets/apps/twilio.jpg"}
                className="h-[85%] sm:h-[80%] lg:h-[100%] aspect-video lg:aspect-auto object-cover object-center mb-4 rounded-xl shadow-[0_9px_40px_rgba(9,64,103,0.20)] cursor-pointer"
                alt=""
              />
            </Link>
            <h5 className="text-xl text-[#094067] font-bold mb-3.5 mt-3.5">
              Twilio
            </h5>
            <p className="text-sm text-[#5F6C7B] font-medium">
              <a
                href="https://www.freshworks.com/apps/twilio_pro/"
                target="_blank"
              >
                FreshDesk
              </a>
            </p>
          </div>

          {/* <div className="col-span-4 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition duration-250 cursor-pointer">
            <Link smooth to="/approval" title="click to See more info">
              <img
                src={process.env.PUBLIC_URL + "/assets/apps/approval.jpg"}
                className="h-[100%] aspect-video lg:aspect-auto object-cover object-center mb-4 rounded-xl shadow-[0_9px_40px_rgba(9,64,103,0.20)]"
                alt=""
              />
            </Link>
            <h5 className="text-xl text-[#094067] font-bold mb-3.5 mt-3.5">
              <a
                href="https://www.freshworks.com/apps/freshdesk/approval_automations/"
                target="_blank"
              >
                Approval Automation
              </a>
            </h5>
            <p className="text-sm text-[#5F6C7B] font-medium">FreshDesk</p>
          </div> */}

          <div className="col-span-1 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition duration-300">
            <Link smooth to="/pdc" title="click to See more info">
              <img
                src={process.env.PUBLIC_URL + "/assets/apps/PDC.jpeg"}
                className="h-[85%] sm:h-[80%] lg:h-[100%] aspect-video lg:aspect-auto object-cover object-center mb-4 rounded-xl shadow-[0_9px_40px_rgba(9,64,103,0.20)]"
                alt=""
              />
            </Link>
            <h5 className="text-xl text-[#094067] font-bold mb-3.5 mt-3.5">
              Post Dated cheque (PDC)
            </h5>
            <p className="text-sm text-[#5F6C7B] font-medium">Zoho</p>
          </div>
        </div>
        <h6 className="text-[#094067] font-extrabold leading-tight pb-8 flex justify-center sm:justify-center md:justify-end lg:justify-end w-full lg:w-auto">
          <Link to="/all" className="flex items-center justify-center  p-2">
            <span className="inline-flex items-center">
              <span className="hidden lg:inline md:inline  underline underline-offset-4 hover:no-underline">
                Our Other Products
              </span>
              <span className="inline lg:hidden md:hidden">See More</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-lg ml-2 arrow-animation"
              />
            </span>
          </Link>
        </h6>
      </section>
    </>
  );
};

export default Product;
