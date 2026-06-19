import { useState } from "react";
import { Link } from "react-router-dom";
import productsData from "./productsData.json";
import PlatformBadge from "../PlatformBadge";
import useSEO from "../../hooks/useSEO";

export default function AllProductsLayout() {
  const [activeFilter, setActiveFilter] = useState("All");

  useSEO({
    title: "All Products",
    description:
      "Browse VTecknologies apps for Freshworks, Zoho, and other SaaS platforms. Find workflow automation, integrations, and productivity tools.",
    canonicalPath: "/all",
  });

  const filters = [
    { label: "All", value: "All" },
    { label: "Freshworks", value: "freshworks" },
    { label: "Zoho", value: "zoho" },
    { label: "HubSpot", value: "hubspot" }
  ];

  const filteredProducts = productsData.products.filter(product => {
    if (activeFilter === "All") return true;
    return product.platformCategory === activeFilter;
  });

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-screen-xl mx-auto px-4 py-12"
    >
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#094067] mb-4">
          Our Products
        </h1>
        <p className="text-lg text-[#5F6C7B] max-w-2xl mx-auto">
          Purpose-built apps and integrations for Freshworks, Zoho, and leading SaaS platforms. Designed to automate workflows, improve visibility, and help your team work faster.
        </p>
      </div>

      {/* Platform Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              activeFilter === filter.value
                ? "bg-[#D687EB] text-white shadow-md"
                : "bg-gray-100 text-[#094067] hover:bg-gray-200"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Products Count */}
      <p className="text-center text-[#5F6C7B] mb-6">
        Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <Link
            key={product.id}
            to={`/${product.key}`}
            data-aos="fade-up"
            data-aos-delay={Math.min(index * 50, 200)}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-[0_12px_40px_rgba(9,64,103,0.12)] transition-all duration-300 hover:-translate-y-1"
          >
            {/* Product Image */}
            <div className="relative aspect-video overflow-hidden bg-gray-50">
              <img
                src={`${process.env.PUBLIC_URL}/${product.icon}`}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Platform Badge Overlay */}
              <div className="absolute top-3 left-3">
                <PlatformBadge platform={product.platform} size="xs" />
              </div>
              {/* Hover arrow icon */}
              <div className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-4 h-4 text-[#D687EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-[#094067] mb-1 group-hover:text-[#D687EB] transition-colors">
                {product.name}
              </h2>
              <p className="text-sm text-[#5F6C7B] mb-3 line-clamp-2">
                {product.tagline}
              </p>

              {/* Target Users */}
              {product.targetUsers && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.targetUsers.slice(0, 2).map((user, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {user}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center text-[#D687EB] font-medium text-sm">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-[#5F6C7B]">
            No products match your filter. Try selecting a different platform.
          </p>
        </div>
      )}
    </section>
  );
}
