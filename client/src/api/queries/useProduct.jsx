import { productServices } from "../services"

export const useProduct = () => {
    const products = productServices.getProducts();
      return {products}
}


