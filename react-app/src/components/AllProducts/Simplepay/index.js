import ProductDetails from "../common";
import productsData from "../productsData.json";

export default function SimplePay() {
  const product = productsData.products.find(p => p.key === "simplepay");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails {...product} desc={product.description} />;
}
