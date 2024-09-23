import ProductCard from "./ProductCard";


export const ProductGrid = ({ products }) => {
  return (
    <div className="p-8 grid grid-cols-3 gap-4">
      {products.map((product, index) => {
        return (
          <ProductCard
            key={index}
            productImage={product.image}
            productName={product.name}
            productPrice={product.price}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
