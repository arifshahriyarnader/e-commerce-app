//import ProductGrid from "../product/ProductGrid"
import ProductGrid from "../product/ProductGrid";
import { FilterSection } from "./FilterSection"
import { LeftPanelHeader } from "./LeftPanelHeader";

export const LeftPanel=() =>{
  
  const headerTitle="React E-Commerce App";
    return (
      <div>
       <LeftPanelHeader title={headerTitle} />
      <FilterSection />
      <ProductGrid />
    </div>
    )
  }