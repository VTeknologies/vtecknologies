const WhyChooseUs = () => {
  const trustPoints = [
    {
      icon: (
        <svg className="w-10 h-10 text-[#D687EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Platform Expertise",
      description: "Deep experience building for Freshworks and Zoho ecosystems. We understand the APIs, limitations, and best practices."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-[#D687EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Production-Tested",
      description: "Our apps are used by support and finance teams handling thousands of interactions daily."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-[#D687EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Fast, Responsive Support",
      description: "Questions? Issues? Our team responds quickly—because we know downtime costs you money."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-[#D687EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Continuous Improvement",
      description: "We actively maintain and enhance our apps based on user feedback and platform updates."
    }
  ];

  return (
    <section
      id="why-choose-us"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-[#F9FAFB] py-16"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#094067] mb-4">
            Why Teams Trust VTecknologies
          </h2>
          <p className="text-lg text-[#5F6C7B] max-w-2xl mx-auto">
            We're not just another app developer. We're specialists who understand the platforms you depend on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-[#094067] mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-[#5F6C7B] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
