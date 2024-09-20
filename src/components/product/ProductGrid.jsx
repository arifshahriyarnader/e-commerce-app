import ProductCard from "./ProductCard";

export const ProductGrid = ({products}) => {
  return (
    <div>
        {products.map((product,index) =>{
           return <ProductCard key={index} product={product} />
        })}
    </div>
  )
}

export default ProductGrid
