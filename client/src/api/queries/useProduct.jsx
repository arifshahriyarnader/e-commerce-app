import { useEffect, useState } from "react"
import { productServices } from "../services"

export const useProduct = () => {
  const [products, setProducts] = useState([])

  const loadProducts = async() =>{
    const products= await productServices.getProducts();
    setProducts(products);
  }
  useEffect(() => {
    loadProducts()
  }, [])
      return {products}
}


