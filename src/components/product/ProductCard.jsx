const ProductCard = ({productImage,productName, productPrice}) => {
 
  return (
    <div className="bg-white p-4 rounded shadow">
        <img src={productImage} alt="product" width="300px" />
       <div className="flex justify-between">
       <h1 className="text-lg font-semibold">{productName}</h1>
       <p>{`$${productPrice}`}</p>
       </div>
       <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700
         text-white font-bold py-2 px-2
          rounded mt-2">Share</button>
           <button className="bg-blue-500 hover:bg-blue-700
         text-white font-bold py-2 px-2
          rounded mt-2">Add to Cart</button>
          </div>
     </div>
  )
}

export default ProductCard
