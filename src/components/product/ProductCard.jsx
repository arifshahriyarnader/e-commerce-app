const ProductCard = ({product,addProductToCart}) => {
  const handleAddProductToCart =()  =>{
    addProductToCart(product)
  }
 
  return (
    <div className="bg-white p-4 rounded shadow">
        <img src={product.image} alt="product" width="300px" />
       <div className="flex justify-between">
       <h1 className="text-lg font-semibold">{product.name}</h1>
       <p>{`$${product.price}`}</p>
       </div>
       <div className="flex justify-end">
           <button className="bg-blue-500 hover:bg-blue-700
         text-white font-bold py-2 px-2
          rounded mt-2" onClick={handleAddProductToCart}>Add to Cart</button>
          </div>
     </div>
  )
}

export default ProductCard
