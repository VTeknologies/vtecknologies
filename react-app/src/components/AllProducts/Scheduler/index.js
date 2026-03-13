import ProductDetails from "../common";
import productsData from "../productsData.json";

export default function Scheduler() {
  const product = productsData.products.find(p => p.key === "scheduler");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails {...product} desc={product.description} />;
}
