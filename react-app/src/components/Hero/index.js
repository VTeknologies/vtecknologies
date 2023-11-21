const Hero = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="grid grid-cols-6 lg:grid-cols-12 mb-20 max-w-screen-xl mx-auto"
    >
      <div className="col-span-6 text-center lg:text-left pt-8 mt-8">
        <p className="text-5xl sm:text-6xl md:text-7xl mb-4 font-extrabold text-[#094067] leading-tight">
          Make your SaaS tools do more
        </p>
        <p className="mb-6 text-base md:text-lg tracking-wide leading-8 font-medium text-[#5F6C7B] pr-0 md:pr-4 xl:pr-32">
          VTecknologies specialises in building apps for your favorite SaaS
          tools such as Zendesk, Freshworks, Zoho and a lot more
        </p>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 justify-center lg:justify-start"></div>
      </div>
      <div className="col-span-6 pl-24 hidden lg:block">
        <img src={process.env.PUBLIC_URL + "/assets/hero-image.jpg"} alt="" />
      </div>
    </section>
  );
};

export default Hero;
