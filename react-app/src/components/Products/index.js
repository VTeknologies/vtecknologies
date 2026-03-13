import { useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../AllProducts/productsData.json";
import PlatformBadge from "../PlatformBadge";

const Product = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { label: "All", value: "All" },
    { label: "Freshworks", value: "freshworks" },
    { label: "Zoho", value: "zoho" },
    { label: "HubSpot", value: "hubspot" }
  ];

  const filteredProducts = productsData.products
    .filter(product => {
      if (activeFilter === "All") return true;
      return product.platformCategory === activeFilter;
    })
    .slice(0, 6);

  return (
    <section
      id="myproduct"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-screen-xl mx-auto px-4 py-16"
    >
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#094067] mb-4">
          Apps That Solve Real Problems
        </h2>
        <p className="text-lg text-[#5F6C7B] max-w-2xl mx-auto">
          From helpdesk automation to accounting extensions, our products are designed for teams that need more from their SaaS tools.
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <Link
            key={product.id}
            to={`/${product.key}`}
            data-aos="fade-up"
            data-aos-delay={index * 50}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-[0_15px_50px_rgba(9,64,103,0.15)] transition-all duration-300 hover:-translate-y-1"
          >
            {/* Product Image */}
            <div className="relative aspect-video overflow-hidden bg-gray-50">
              <img
                src={process.env.PUBLIC_URL + "/" + product.icon}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Platform Badge Overlay */}
              <div className="absolute top-3 left-3">
                <PlatformBadge platform={product.platform} size="xs" />
              </div>
              {/* Hover icon */}
              <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-5 h-5 text-[#D687EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-[#094067] mb-2 group-hover:text-[#D687EB] transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-[#5F6C7B] mb-3 line-clamp-2">
                {product.tagline}
              </p>
              <div className="flex items-center text-[#D687EB] font-semibold text-sm">
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

      {/* See All Products Link */}
      <div className="text-center mt-10">
        <Link
          to="/all"
          className="inline-flex items-center px-6 py-3 bg-[#094067] text-white font-bold rounded-lg hover:bg-[#0a5a8a] transition-colors duration-300"
        >
          <span>View All Products</span>
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Product;
