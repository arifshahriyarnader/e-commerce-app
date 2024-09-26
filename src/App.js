//import { LeftPanel } from "./components/leftPanel/LeftPanel";
import { useState } from "react";
import { LeftPanel } from "./components/LeftPanel/LeftPanel";
import { RightPanel } from "./components/RightPanel/RightPanel";

function App() {
  const [cart, setCart] =useState([])
  const addProductToCart =(product) =>{
    const productIndexInCart=cart.findIndex((cartItem)=>
      cartItem.id === product.id
    );
    if(productIndexInCart !== -1){
      cart[productIndexInCart].quantity++;
      setCart([...cart])
    }
    else{
      //const newCartItem={...product, quantity:1}
    setCart([...cart, {...product, quantity:1}])
    }
  }
  return (
    <div className="bg-gray-200">
      <div className="flex container mx-auto">
      <LeftPanel addProductToCart={addProductToCart} />
      <RightPanel cart={cart} />
        </div>   
    </div>
    

  );
}

export default App;
