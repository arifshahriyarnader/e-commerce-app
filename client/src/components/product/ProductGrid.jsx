import { useProduct } from "../../api/queries/useProduct";
import ProductCard from "./ProductCard";

export const ProductGrid = () => {
  
   const {isLoading,products} =useProduct();
  return (
    <div className="p-8 grid grid-cols-3 gap-4">
      {isLoading ? <h1>Loading....</h1> : products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
     
    </div>
  );
};

export default ProductGrid;
