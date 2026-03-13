const ValueProposition = () => {
  const pillars = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#D687EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: "Seamless Integration",
      description: "Apps built natively for Freshworks, Zoho, and other major platforms. No clunky workarounds or complex setup required."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#D687EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Workflow Automation",
      description: "Eliminate repetitive tasks with smart automations—from ticket scheduling to approval routing to data synchronization."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#D687EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Enterprise-Ready",
      description: "Secure, scalable, and trusted by businesses managing thousands of tickets and transactions daily."
    }
  ];

  return (
    <section
      id="value-proposition"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-screen-xl mx-auto py-16 px-4"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#094067] mb-4">
          Built for Teams That Run on SaaS
        </h2>
        <p className="text-lg text-[#5F6C7B] max-w-2xl mx-auto">
          Your business relies on powerful platforms like Freshdesk, Zoho Books, and FreshSales.
          But out-of-the-box features don't always fit your workflow. We bridge that gap.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(9,64,103,0.08)] hover:shadow-[0_8px_30px_rgba(9,64,103,0.12)] transition-shadow duration-300"
          >
            <div className="mb-4">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-bold text-[#094067] mb-3">
              {pillar.title}
            </h3>
            <p className="text-[#5F6C7B] leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProposition;
