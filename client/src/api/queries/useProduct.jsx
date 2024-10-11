import { useEffect, useState } from "react"
import { productServices } from "../services"

export const useProduct = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  const loadProducts = async() =>{
    try{
      setIsLoading(true)
      const products= await productServices.getProducts();
      setProducts(products);
    }
    catch(err){
      alert("Failed to load products")
      console.log(err)
    } finally{
      setIsLoading(false)
    }
  }
  useEffect(() => {
    loadProducts()
  }, [])
      return {isLoading,products}
}


