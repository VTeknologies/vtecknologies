import ProductDetails from "../common";
import productsData from "../productsData.json";

export default function Payspace() {
  const product = productsData.products.find(p => p.key === "payspace");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails {...product} desc={product.description} />;
}
