import Wrapper from "../Wrapper/index";

const About = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="grid max-w-screen-xl mx-auto p-4"
    >
      <div className="col-span-12 text-left mt-2">
        <h3 className="text-5xl sm:text-6xl md:text-7xl mb-10 font-extrabold text-[#094067] leading-tight pt-2 text-left">
          About Us
        </h3>
        <div className="mb-10 text-base md:text-lg tracking-wide leading-8 font-medium text-[#5F6C7B] pr-0 md:pr-4 xl:pr-32 d-flex justify-context-center">
          <div className="mb-4">
            V Tecknologies, a new age software company founded with one goal to
            make SAAS tools do more by not just implementing them but also build
            extensions and bridge integration gaps.
          </div>
          <div className="mb-4 text-xl font-black">What do we do ?</div>
          {/* <img src="./assets/img/about.jpg" alt="" /> */}
          <div className="mb-4">
            Our primary focus revolves around the realm of software development
            - a discipline we take very seriously. Our overarching mission is to
            craft, design, and execute straightforward yet powerful applications
            that enhance collaboration, transparency, and productivity within
            your preferred SaaS tools.
          </div>
          <div className="mb-4">
            We also implement Cloud based products from Various companies like,
            Freshworks, Zoho, Zendesk, Intercom etc and also build / integrate
            applications as per customers business process and requirement. This
            gives us an edge to understand the product and its gaps.
          </div>
          <div className="mb-4">
            From Requirement sourcing, analyzing, optimizing the existing
            application in use and finally building integrations or widgets to
            complete the cycle.
          </div>
          <div className="mb-4">
            Not all companies take this extensive approach, but this is what
            makes us different.
          </div>
          <div className="mb-4 text-xl font-black">Why Choose us?</div>
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
            complexities to create a profound impact.
          </div>
          <div className="mb-4">
            Want to check the applications we have deployed till date, Click
            here now.
          </div>
          <div className="mb-4">
            Have an app idea ? write to us without hesitation, because we
            believe a simple requirement to one company is game changing for the
            other.
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 justify-center lg:justify-start"></div>
      </div>
    </section>
    // </Wrapper>
  );
};

export default About;
