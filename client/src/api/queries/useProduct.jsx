import axios from "axios";
import { useEffect, useState } from "react"
//import { productServices } from "../services"

export const useProduct = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then((res) =>{
      setProducts(res.data);
    })
    .catch((err) =>{
      alert('Failed to load Products')
      console.error('Error Fetching products:', err);
    })
  }, [])
      return {products}
}


