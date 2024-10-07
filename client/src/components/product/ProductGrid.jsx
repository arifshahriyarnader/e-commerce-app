import { useEffect, useState } from "react";
//import { useProduct } from "../../api/queries";
import ProductCard from "./ProductCard";

export const ProductGrid = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/api/products').then((res) => res.json()).then((data) =>{
      setProducts(data);
    })
  }, [])
  //const {products} = useProduct();
  return (
    <div className="p-8 grid grid-cols-3 gap-4">
      {products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
};

export default ProductGrid;
