import Wrapper from "../Wrapper";

const Contact = () => {
  return (
    <>
      <div id="contactme"></div>
      <Wrapper>
        <section
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="500"
          className="container mx-auto max-w-screen-xl relative w-full bg-[#D8EEFE] py-12 rounded-xl shadow-[0_6px_30px_rgba(9,64,103,0.13)] mb-24 overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center px-4 sm:px-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#094067] text-center font-bold leading-tight px-0 lg:px-24 xl:px-48 mb-2">
              DO YOU HAVE ANY APP IDEAS?
              <h4 className="my-9 text-xl">
                We would love to hear from you on what you think we should build
                next
              </h4>
            </h3>
            <div className="w-full flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <a
                className="w-full sm:w-fit bg-[#EF4565] px-6 py-4 text-white font-bold shadow-md shadow-[rgba(239,69,101,0.25)] rounded-md hover:bg-[#d03753] transition-colors duration-300 text-center"
                href="https://vteck.freshdesk.com/support/tickets/new"
                target="_blank"
              >
                Write to Us
              </a>
            </div>
          </div>
          <div className="absolute top-[-140%] left-[-27%] w-[500px] h-[680px] border-8 border-[rgba(255,255,255,0.75)] rounded-full"></div>
          <div className="absolute bottom-[-190%] left-[-25%] w-[500px] h-[680px] rotate-45 border-8 border-[rgba(255,255,255,0.75)] rounded-full"></div>
          <div className="absolute top-[-140%] right-[-27%] w-[500px] h-[680px] border-8 border-[rgba(255,255,255,0.75)] rounded-full"></div>
          <div className="absolute bottom-[-190%] right-[-16%] w-[500px] h-[680px] rotate-45 border-8 border-[rgba(255,255,255,0.75)] rounded-full"></div>
        </section>
      </Wrapper>
    </>
  );
};

export default Contact;
