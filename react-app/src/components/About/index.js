import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useSEO from "../../hooks/useSEO";

const About = () => {
  useSEO({
    title: "About Us",
    description: "Learn about VTecknologies - a software company building apps and integrations for Freshworks, Zoho, Zendesk, and other SaaS platforms."
  });

  const whatWeDo = [
    {
      title: "Build Apps",
      description: "We create marketplace apps for Freshworks, Zoho, and other platforms that extend functionality and automate workflows.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Implement Solutions",
      description: "We implement and customize cloud-based products from Freshworks, Zoho, Zendesk, and more to fit your business processes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Integrate Systems",
      description: "We build custom integrations to connect your business tools, bridging gaps between platforms and automating data flow.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    }
  ];

  const whyChooseUs = [
    "10+ years of experience in SaaS implementation and development",
    "Deep knowledge of Lean and Agile principles",
    "Focus on simplicity, efficiency, and user experience",
    "Customer-centric approach with responsive support",
    "Continuous improvement based on user feedback"
  ];

  const platforms = [
    { name: "Freshworks", logo: "assets/partners/freshwork.png" },
    { name: "Zoho", logo: "assets/partners/zoho.png" },
    { name: "Zendesk", logo: "assets/partners/zendesk.png" },
    { name: "Intercom", logo: "assets/partners/intercom.png" }
  ];

  return (
    <article
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-screen-xl mx-auto px-4 py-8"
    >
      {/* Page Header */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#094067] mb-6">
          About VTecknologies
        </h1>
        <p className="text-xl text-[#5F6C7B] max-w-3xl mx-auto">
          A new age software company focused on making SaaS tools do more.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-[#094067] to-[#0a5a8a] rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed max-w-3xl">
            VTecknologies exists to help businesses unlock the full potential of their SaaS tools.
            We believe that software should adapt to your workflows—not the other way around.
            That's why we build integration apps and extensions that fill the gaps left by out-of-the-box features.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-8 text-center">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whatWeDo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-[#D8EEFE] rounded-xl flex items-center justify-center text-[#094067] mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#094067] mb-3">
                {item.title}
              </h3>
              <p className="text-[#5F6C7B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-4 text-center">
          Platform Expertise
        </h2>
        <p className="text-center text-[#5F6C7B] mb-8 max-w-2xl mx-auto">
          We specialize in the platforms your business depends on, with deep knowledge of their APIs, ecosystems, and best practices.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {platforms.map((platform, index) => (
            <div key={index} className="text-center">
              <img
                src={process.env.PUBLIC_URL + "/" + platform.logo}
                alt={platform.name}
                className="h-10 md:h-12 object-contain mx-auto grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-8 text-center">
          Why Choose Us
        </h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {whyChooseUs.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#D687EB] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#5F6C7B]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Approach */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-6 text-center">
          Our Approach
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-[#5F6C7B] leading-relaxed mb-6">
            Not all companies take an extensive approach to understanding your needs. But this is what makes us different.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-[#D687EB] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">1</div>
              <p className="text-sm text-[#094067] font-medium">Requirement Sourcing</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-[#D687EB] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">2</div>
              <p className="text-sm text-[#094067] font-medium">Analysis & Planning</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-[#D687EB] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">3</div>
              <p className="text-sm text-[#094067] font-medium">Optimization</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-[#D687EB] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">4</div>
              <p className="text-sm text-[#094067] font-medium">Build & Integrate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#D8EEFE] rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-4">
          Have an App Idea?
        </h2>
        <p className="text-[#5F6C7B] mb-6 max-w-xl mx-auto">
          We would love to hear from you. A simple requirement for one company is game-changing for another.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <HashLink
            to="/app/#contactme"
            className="px-8 py-3 bg-[#EF4565] text-white font-bold rounded-lg hover:bg-[#d93d5a] transition-colors"
          >
            Contact Us
          </HashLink>
          <Link
            to="/all"
            className="px-8 py-3 border-2 border-[#094067] text-[#094067] font-bold rounded-lg hover:bg-[#094067] hover:text-white transition-all"
          >
            View Our Products
          </Link>
        </div>
      </section>
    </article>
  );
};

export default About;
