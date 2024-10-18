import { Box } from "@mui/material";
import { useProduct } from "../../api/queries/useProduct";
import ProductCard from "./ProductCard";

export const ProductGrid = () => {
  
   const {isLoading,products} =useProduct();
  return (
    <Box  sx={{display:"flex", flexWrap:"wrap", gap:2, margin:4}}>
      {isLoading ? <h1>Loading....</h1> : products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
     
    </Box>
  );
};

export default ProductGrid;
