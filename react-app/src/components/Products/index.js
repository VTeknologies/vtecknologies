import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Product = () => {
  return (
    <>
      <div id="myproduct"></div>
      <section
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="py-2 mb-16 text-center lg:text-left max-w-screen-xl mx-auto mb-8"
      >
        <div className="flex items-center justify-between mb-8 lg:mb-5">
          <h3 className="text-4xl text-[#094067] font-extrabold leading-tight w-full lg:w-fit pb-8">
            Our Top products
          </h3>
          <h6 className="text-[#094067] font-extrabold underline underline-offset-4 hover:no-underline leading-tight w-full lg:w-fit pb-8">
            <Link to="/all">Our other products</Link>
          </h6>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 mb-8">
          <div className="col-span-4 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition duration-250 ">
            <Link smooth to="/app/todo" title="Click to See more info">
              <img
                src={process.env.PUBLIC_URL + "/assets/apps/todo.jpg"}
                className="h-[100%] aspect-video lg:aspect-auto object-cover object-center mb-4 rounded-xl shadow-[0_9px_40px_rgba(9,64,103,0.20)] cursor-pointer"
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
          <div className="col-span-4 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition duration-250 ">
            <Link smooth to="/twilio" title="Click to See more info">
              <img
                src={process.env.PUBLIC_URL + "/assets/apps/twilio.jpg"}
                className="h-[100%] aspect-video lg:aspect-auto object-cover object-center mb-4 rounded-xl shadow-[0_9px_40px_rgba(9,64,103,0.20)] cursor-pointer"
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
          <div className="col-span-4 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition duration-300">
            {/* <a 
              href="https://youtu.be/ZgPGDql1bpg"
              target="_blank"
              title="Click to See Demo"
            > */}
            <Link smooth to="/pdc" title="click to See more info">
              {/* <a href="app/products/pdc"> */}
              <img
                src={process.env.PUBLIC_URL + "/assets/apps/PDC.jpeg"}
                className="h-[100%] aspect-video lg:aspect-auto object-cover object-center mb-4 rounded-xl shadow-[0_9px_40px_rgba(9,64,103,0.20)]"
                alt=""
              />
              {/* </a> */}
            </Link>
            {/* </a> */}
            {/* <h5 className="text-xl text-[#094067] font-bold mb-3.5 mt-3.5">
              <a
                href="https://www.freshworks.com/apps/freshdesk/ticket_schedules_1/"
                target="_blank"
              >
                Ticket Scheduler
              </a>
            </h5>
            <p className="text-sm text-[#5F6C7B] font-medium">FreshDesk</p> */}
            <h5 className="text-xl text-[#094067] font-bold mb-3.5 mt-3.5">
              Post Dated cheque (PDC)
            </h5>
            <p className="text-sm text-[#5F6C7B] font-medium">Zoho</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
