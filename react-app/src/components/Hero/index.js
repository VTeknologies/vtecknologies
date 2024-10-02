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
          alt="Hero"
          className="object-cover w-full h-auto"
        />
      </div>

      <div className="flex-1 text-left px-4 lg:px-0 flex flex-col">
        <p className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl mb-4 md:mb-6 font-extrabold text-[#094067] leading-tight">
          Make your SaaS tools do more
        </p>
        <p className="mb-6 text-base md:text-lg tracking-wide leading-8 font-medium text-[#5F6C7B] pr-0 md:pr-4 xl:pr-32">
          VTecknologies specializes in building apps for your favorite SaaS
          tools such as Zendesk, Freshworks, Zoho, and a lot more.
        </p>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 justify-center lg:justify-start"></div>
      </div>

      <div className="hidden md:flex lg:flex lg:flex-1 items-center justify-center pl-24" id="desktop-image">
        <img
          src={process.env.PUBLIC_URL + "/assets/hero-image.jpg"}
          alt="Hero"
          className="object-contain w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
