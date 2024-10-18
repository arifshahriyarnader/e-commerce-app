import { Stack } from "@mui/material";
import ProductGrid from "../product/ProductGrid";
import { FilterSection } from "./FilterSection"
import { LeftPanelHeader } from "./LeftPanelHeader";

export const LeftPanel=() =>{
  const headerTitle="React E-Commerce App";
    return (
      <Stack>
       <LeftPanelHeader title={headerTitle} />
      <FilterSection />
      <ProductGrid />
    </Stack>
    )
  }