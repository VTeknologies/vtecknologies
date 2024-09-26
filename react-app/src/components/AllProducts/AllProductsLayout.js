import React from "react";
import { Link } from "react-router-dom";
import productsData from "./productsData.json";
export default function AllProductsLayout() {
  const products = [...productsData.products];
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="grid max-w-screen-xl mx-auto"
    >
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
              <div className="border border-solid border-gray-200 rounded-lg hover:shadow-lg">
                <Link
                  key={product.key}
                  to={`/${product.key}`}
                  className="group h-auto max-w-full"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={`${process.env.PUBLIC_URL}/${product.icon}`}
                      alt={product.name}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-1 text-lg text-gray-700 text-center font-medium">
                    {product.name}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-gray-900 text-center">
                    {product.platform}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
