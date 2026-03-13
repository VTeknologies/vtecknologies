const SocialProof = () => {
  const badges = [
    {
      name: "Freshworks Marketplace",
      description: "Official Partner",
      color: "#22C55E"
    },
    {
      name: "Zoho Marketplace",
      description: "Verified Publisher",
      color: "#EF4444"
    }
  ];

  return (
    <section
      id="social-proof"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-screen-xl mx-auto py-12 px-4"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-2">
          Trusted by Growing Teams
        </h2>
        <p className="text-[#5F6C7B]">
          Our apps are listed on official marketplaces and trusted by businesses worldwide
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: badge.color }}
            />
            <div>
              <p className="font-semibold text-[#094067]">{badge.name}</p>
              <p className="text-sm text-[#5F6C7B]">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-[#5F6C7B] mb-4">Available on</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          <img
            src={process.env.PUBLIC_URL + "/assets/partners/freshwork.png"}
            alt="Freshworks"
            className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/partners/zoho.png"}
            alt="Zoho"
            className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/partners/intercom.png"}
            alt="Intercom"
            className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/partners/zendesk.png"}
            alt="Zendesk"
            className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
