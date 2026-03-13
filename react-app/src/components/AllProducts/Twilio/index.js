import ProductDetails from "../common";
import productsData from "../productsData.json";

export default function Twilio() {
  const product = productsData.products.find(p => p.key === "twilio");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails {...product} desc={product.description} />;
}
