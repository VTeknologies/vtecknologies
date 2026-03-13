import { Link } from "react-router-dom";
import productsData from "../AllProducts/productsData.json";
import PlatformBadge from "../PlatformBadge";

const RelatedProducts = ({ productKeys = [], currentProductKey }) => {
  // Filter out the current product and find related products
  const relatedProducts = productsData.products.filter(
    product => productKeys.includes(product.key) && product.key !== currentProductKey
  ).slice(0, 3);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-8 text-center">
        You May Also Like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/${product.key}`}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-[0_12px_40px_rgba(9,64,103,0.12)] transition-all duration-300 hover:-translate-y-1"
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
              {/* Hover arrow icon */}
              <div className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-4 h-4 text-[#D687EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-bold text-[#094067] group-hover:text-[#D687EB] transition-colors mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-[#5F6C7B] line-clamp-2">
                {product.tagline}
              </p>
              <div className="flex items-center text-[#D687EB] font-medium text-sm mt-3">
                <span>View Product</span>
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
