import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import PlatformBadge from "../../PlatformBadge";
import RelatedProducts from "../../RelatedProducts";
import useSEO from "../../../hooks/useSEO";

const ProductDetails = ({
  icon,
  name,
  tagline,
  platform,
  platformCategory,
  desc,
  description,
  problemStatement,
  solution,
  videolink,
  appurl,
  installationprocedures,
  installationpprocedures,
  features,
  benefits,
  howItWorks,
  relatedProducts,
  targetUsers,
  key: productKey,
}) => {
  const [showInstallation, setShowInstallation] = useState(false);

  // Support both old and new field names
  const descriptionArray = description || desc || [];
  const installSteps = installationprocedures || installationpprocedures || [];

  useSEO({
    title: name,
    description: tagline || (descriptionArray[0] ? descriptionArray[0].substring(0, 155) : '')
  });

  return (
    <article
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-screen-xl mx-auto px-4 py-8"
    >
      {/* Hero Section */}
      <section className="mb-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="mb-4">
              <PlatformBadge platform={platform} size="md" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#094067] mb-4">
              {name}
            </h1>
            {tagline && (
              <p className="text-xl text-[#5F6C7B] mb-6">
                {tagline}
              </p>
            )}

            {/* Target Users */}
            {targetUsers && targetUsers.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm text-[#5F6C7B]">For:</span>
                {targetUsers.map((user, i) => (
                  <span key={i} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {user}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {appurl && (
                <a
                  href={appurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#EF4565] text-white font-bold rounded-lg shadow-lg hover:bg-[#d93d5a] transition-all duration-300"
                >
                  Install Now
                </a>
              )}
              {videolink && (
                <a
                  href={videolink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-[#D687EB] text-[#D687EB] font-bold rounded-lg hover:bg-[#D687EB] hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </a>
              )}
            </div>
          </div>

          {/* Product Image */}
          <div className="w-full lg:w-[40%]">
            <div className="relative group">
              <img
                src={`${process.env.PUBLIC_URL}/${icon}`}
                alt={name}
                className="w-full h-auto rounded-xl shadow-[0_10px_40px_rgba(9,64,103,0.15)] group-hover:shadow-[0_15px_50px_rgba(9,64,103,0.2)] transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      {problemStatement && (
        <section className="mb-12 bg-gray-50 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-4">
            The Challenge
          </h2>
          <p className="text-lg text-[#5F6C7B] leading-relaxed">
            {problemStatement}
          </p>
        </section>
      )}

      {/* Solution */}
      {solution && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-4">
            How {name} Helps
          </h2>
          <p className="text-lg text-[#5F6C7B] leading-relaxed">
            {solution}
          </p>
        </section>
      )}

      {/* Description (fallback for products without problemStatement/solution) */}
      {!problemStatement && !solution && descriptionArray.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-4">
            Overview
          </h2>
          <div className="text-lg text-[#5F6C7B] leading-relaxed space-y-4">
            {descriptionArray.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}

      {/* Key Features */}
      {features && features.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100">
                <svg className="w-6 h-6 text-[#D687EB] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#5F6C7B]">{feature}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefits && benefits.length > 0 && (
        <section className="mb-12 bg-[#D8EEFE] rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-6">
            Why Teams Use {name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-8 h-8 bg-[#094067] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-[#094067] font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* How It Works */}
      {howItWorks && howItWorks.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-6">
            How It Works
          </h2>
          <div className="space-y-4">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="w-10 h-10 bg-[#D687EB] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <div className="flex-1 pt-2">
                  <p className="text-[#5F6C7B]">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Video Demo */}
      {videolink && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-6">
            See It In Action
          </h2>
          <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-[0_10px_50px_rgba(9,64,103,0.2)]">
            {/* Video container with increased height */}
            <div className="w-full" style={{ minHeight: '480px', height: '60vh', maxHeight: '720px' }}>
              <iframe
                src={videolink.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
                title={`${name} Demo Video`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-center text-sm text-[#5F6C7B] mt-4">
            Watch the full demo to see {name} in action
          </p>
        </section>
      )}

      {/* Installation Guide (Collapsible) */}
      {installSteps.length > 0 && (
        <section className="mb-12">
          <button
            onClick={() => setShowInstallation(!showInstallation)}
            className="flex items-center justify-between w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#094067]">
              Installation Guide
            </h2>
            <svg
              className={`w-6 h-6 text-[#094067] transition-transform ${showInstallation ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showInstallation && (
            <div className="mt-4 p-6 bg-white border border-gray-200 rounded-xl">
              <ol className="space-y-3">
                {installSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#D687EB] font-bold">{index + 1}.</span>
                    <span className="text-[#5F6C7B]">
                      {step.includes("https://") ? (
                        <>
                          {step.split("https://")[0]}
                          <a
                            href={`https://${step.split("https://")[1]}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline break-all"
                          >
                            https://{step.split("https://")[1]}
                          </a>
                        </>
                      ) : (
                        step
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </section>
      )}

      {/* Bottom CTA */}
      <section className="mb-12 bg-gradient-to-r from-[#094067] to-[#0a5a8a] rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Get Started with {name}?
        </h2>
        <p className="text-blue-100 mb-6">
          Install now and transform how your team works.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {appurl && (
            <a
              href={appurl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#EF4565] text-white font-bold rounded-lg hover:bg-[#d93d5a] transition-colors"
            >
              Install Now
            </a>
          )}
          <HashLink
            to="/app/#contactme"
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#094067] transition-all"
          >
            Contact Us
          </HashLink>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts && relatedProducts.length > 0 && (
        <RelatedProducts productKeys={relatedProducts} currentProductKey={productKey} />
      )}
    </article>
  );
};

export default ProductDetails;
