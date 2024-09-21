import ProductCard from "./ProductCard";

export const ProductGrid = ({products}) => {
  return (
    <div>
        {products.map((product,index) =>{
           return <ProductCard key={index}
           productImage={product.image}
            productName={product.name}
            productPrice={product.price} />
        })}
    </div>
  )
}

export default ProductGrid
