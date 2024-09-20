import logo from '../../logo.svg'

const ProductCard = ({product}) => {
 
  return (
    <div>
        <img src={logo} alt="Product Image" width="300px" />
        <h1>{product.name}</h1>
        <p>{`$${product.price}`}</p>
        <button>Add to Cart</button>
     </div>
  )
}

export default ProductCard
