import { useEffect, useState } from "react"
import { productServices } from "../services"

export const useProduct = () => {
  const [products, setProducts] = useState([])

  const loadProducts = async() =>{
    try{
      const products= await productServices.getProducts();
      setProducts(products);
    }
    catch(err){
      alert("Failed to load products")
      console.log(err)
    }
  }
  useEffect(() => {
    loadProducts()
  }, [])
      return {products}
}


