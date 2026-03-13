import ProductDetails from "../../AllProducts/common";
import productsData from "../../AllProducts/productsData.json";

export default function StickyNotes() {
  const product = productsData.products.find(p => p.key === "stickynotes");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails {...product} desc={product.description} />;
}
