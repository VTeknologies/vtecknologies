import ProductDetails from "../common";
import productsData from "../productsData.json";

export default function PDC() {
  const product = productsData.products.find(p => p.key === "pdc");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails {...product} desc={product.description} />;
}
