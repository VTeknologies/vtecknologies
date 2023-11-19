import Wrapper from "../Wrapper/index";

const About = () => {
  return (
    // <Wrapper>
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="grid grid-flow-row auto-rows-max grid-cols-12 lg:grid-cols-12 mb-20 text-center flex justify-center items-center"
    >
      <div className="col-span-12 text-center lg:text-left mt-8">
        <h3 className="text-5xl sm:text-6xl md:text-7xl mb-9 font-extrabold text-[#094067] leading-tight pt-8 text-center">
          About Us
        </h3>
        <div className="mb-6 text-base md:text-lg tracking-wide leading-8 font-medium text-[#5F6C7B] pr-0 md:pr-4 xl:pr-32 d-flex justify-context-center">
          <div className="mb-4">
            VTecknologies an Indian company based in Chennai, but our physical
            location is now less relevant in today's remote-centric landscape.
            Our primary focus revolves around the realm of software
            development—a discipline we take very seriously. Our overarching
            mission is to craft, design, and execute straightforward yet
            powerful applications that enhance collaboration, transparency, and
            productivity within your preferred SaaS tools.
          </div>
          <img src="./assets/img/about.jpg" alt="" />
          <div className="mb-4">
            Our team brings a wealth of experience, with more than a decade
            dedicated to orchestrating large-scale product planning, defect
            management, and development processes, all firmly rooted in Lean and
            Agile principles.
          </div>
          <div className="mb-4">
            Our mastery extends to programming and process engineering platforms
            as well. At our core, efficiency and innovation are the guiding
            principles of our philosophy. We firmly believe in simplifying
            complexities to create a profound impact. Our suite of commercial
            applications, designed for various companies, seamlessly aligns with
            our vision. These applications offer inventive and robust tools
            custom-tailored for highly efficient teams.
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 justify-center lg:justify-start"></div>
      </div>
    </section>
    // </Wrapper>
  );
};

export default About;
