import ProductDetails from "../common";
import productsData from "../productsData.json";

export default function ApprovalApp() {
  const product = productsData.products.find(p => p.key === "approval");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails {...product} desc={product.description} />;
}
