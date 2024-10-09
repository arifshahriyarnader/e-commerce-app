import { useEffect, useState } from "react";
import axios from 'axios';
//import { useProduct } from "../../api/queries";
import ProductCard from "./ProductCard";

export const ProductGrid = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then((res) => {
      setProducts(res.data)
    })
    .catch((err) =>{
      alert('Failed to load products')
      console.error('Error Fetching products:', err);
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
