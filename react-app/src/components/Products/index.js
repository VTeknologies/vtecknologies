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
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 mb-8">
          <div className="col-span-4 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition duration-250 cursor-pointer">
            <a
              href="https://youtu.be/luOrjK2I1rk"
              target="_blank"
              title="Click to See Demo"
            >
              <img
                src="assets/apps/todo.jpg"
                className="h-[100%] aspect-video lg:aspect-auto object-cover object-center mb-4 rounded-xl shadow-[0_9px_40px_rgba(9,64,103,0.20)]"
                alt=""
              />
            </a>
            <h5 className="text-xl text-[#094067] font-bold mb-3.5 mt-3.5">
              <a
                href="https://www.freshworks.com/apps/freshdesk/task_master/"
                target="_blank"
              >
                Tasks Todo
              </a>
            </h5>
            <p className="text-sm text-[#5F6C7B] font-medium">FreshDesk</p>
          </div>
          <div className="col-span-4 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition duration-250 cursor-pointer">
            <a
              href="https://youtu.be/tmYUO4RrstA"
              target="_blank"
              title="Click to See Demo"
            >
              <img
                src="assets/apps/approval.jpg"
                className="h-[100%] aspect-video lg:aspect-auto object-cover object-center mb-4 rounded-xl shadow-[0_9px_40px_rgba(9,64,103,0.20)]"
                alt=""
              />
            </a>
            <h5 className="text-xl text-[#094067] font-bold mb-3.5 mt-3.5">
              <a
                href="https://www.freshworks.com/apps/freshdesk/approval_automations/"
                target="_blank"
              >
                Approval Automation
              </a>
            </h5>
            <p className="text-sm text-[#5F6C7B] font-medium">FreshDesk</p>
          </div>
          <div className="col-span-4 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition duration-300 cursor-pointer">
            <a
              href="https://youtu.be/ZgPGDql1bpg"
              target="_blank"
              title="Click to See Demo"
            >
              <img
                src="assets/apps/scheduler.jpg"
                className="h-[100%] aspect-video lg:aspect-auto object-cover object-center mb-4 rounded-xl shadow-[0_9px_40px_rgba(9,64,103,0.20)]"
                alt=""
              />
            </a>
            <h5 className="text-xl text-[#094067] font-bold mb-3.5 mt-3.5">
              <a
                href="https://www.freshworks.com/apps/freshdesk/ticket_schedules_1/"
                target="_blank"
              >
                Ticket Scheduler
              </a>
            </h5>
            <p className="text-sm text-[#5F6C7B] font-medium">FreshDesk</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
