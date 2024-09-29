import { useProduct } from "../../hooks";
import ProductCard from "./ProductCard";

export const ProductGrid = () => {
  const {products} = useProduct();
  return (
    <div className="p-8 grid grid-cols-3 gap-4">
      {products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
};

export default ProductGrid;
