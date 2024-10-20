import { Stack } from "@mui/material";
import ProductGrid from "../product/ProductGrid";
import { FilterSection } from "./FilterSection"

export const LeftPanel=() =>{
 
    return (
      <Stack>
      <FilterSection />
      <ProductGrid />
    </Stack>
    )
  }