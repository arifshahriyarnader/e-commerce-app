import { useState } from "react";

export function useCart(){
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
    const  productRemoveFromCart =({productId})=>{
      const productIndexInCart=cart.findIndex((cartItem)=>
        cartItem.id === productId
      );
      if(productIndexInCart === -1){
        alert('Product is not present in the cart');
        return;
      }
      cart[productIndexInCart].quantity--;
      console.log(cart[productIndexInCart].quantity)
      if(cart[productIndexInCart].quantity === 0){
        const updatedCart=cart.filter((cartItem) => cartItem.id !== productId);
        console.log(updatedCart)
        setCart(updatedCart)
        return;
      }
      setCart([...cart]);
    }
    return{
      cart,
      addProductToCart,
      productRemoveFromCart
    }
  }