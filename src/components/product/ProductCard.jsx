//import logo from '../../logo.svg'

const ProductCard = ({productImage,productName, productPrice}) => {
 
  return (
    <div>
        <img src={productImage} alt="product" width="300px" />
        <h1>{productName}</h1>
        <p>{`$${productPrice}`}</p>
        <button>Add to Cart</button>
     </div>
  )
}

export default ProductCard
