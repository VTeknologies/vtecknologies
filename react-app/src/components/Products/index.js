import Wrapper from "../Wrapper";
const Product = () => {
  return (
    <>
      <div id="myproduct"></div>
      <Wrapper>
        <section
          data-aos="zoom-in"
          data-aos-duration="1000"
          class="py-2 mb-16 text-center lg:text-left"
        >
          <div class="flex items-center justify-between mb-8 lg:mb-5">
            <h3 class="text-4xl text-[#094067] font-extrabold leading-tight w-full lg:w-fit pb-8">
              Our Top products
            </h3>
          </div>
          <div class="grid grid-cols-4 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 mb-8">
            <div class="col-span-4 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition duration-250 cursor-pointer">
              <a
                href="https://youtu.be/luOrjK2I1rk"
                target="_blank"
                title="Click to See Demo"
              >
                <img
                  src="assets/apps/todo.jpg"
                  class="h-[100%] aspect-video lg:aspect-auto object-cover object-center mb-4 rounded-xl shadow-[0_9px_40px_rgba(9,64,103,0.20)]"
                  alt=""
                />
              </a>
              <h5 class="text-xl text-[#094067] font-bold mb-3.5 mt-3.5">
                <a
                  href="https://www.freshworks.com/apps/freshdesk/task_master/"
                  target="_blank"
                >
                  Tasks Todo
                </a>
              </h5>
              <p class="text-sm text-[#5F6C7B] font-medium">FreshDesk</p>
            </div>
            <div class="col-span-4 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition duration-250 cursor-pointer">
              <a
                href="https://youtu.be/tmYUO4RrstA"
                target="_blank"
                title="Click to See Demo"
              >
                <img
                  src="assets/apps/approval.jpg"
                  class="h-[100%] aspect-video lg:aspect-auto object-cover object-center mb-4 rounded-xl shadow-[0_9px_40px_rgba(9,64,103,0.20)]"
                  alt=""
                />
              </a>
              <h5 class="text-xl text-[#094067] font-bold mb-3.5 mt-3.5">
                <a
                  href="https://www.freshworks.com/apps/freshdesk/approval_automations/"
                  target="_blank"
                >
                  Approval Automation
                </a>
              </h5>
              <p class="text-sm text-[#5F6C7B] font-medium">FreshDesk</p>
            </div>
            <div class="col-span-4 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition duration-300 cursor-pointer">
              <a
                href="https://youtu.be/ZgPGDql1bpg"
                target="_blank"
                title="Click to See Demo"
              >
                <img
                  src="assets/apps/scheduler.jpg"
                  class="h-[100%] aspect-video lg:aspect-auto object-cover object-center mb-4 rounded-xl shadow-[0_9px_40px_rgba(9,64,103,0.20)]"
                  alt=""
                />
              </a>
              <h5 class="text-xl text-[#094067] font-bold mb-3.5 mt-3.5">
                <a
                  href="https://www.freshworks.com/apps/freshdesk/ticket_schedules_1/"
                  target="_blank"
                >
                  Ticket Scheduler
                </a>
              </h5>
              <p class="text-sm text-[#5F6C7B] font-medium">FreshDesk</p>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Product;
