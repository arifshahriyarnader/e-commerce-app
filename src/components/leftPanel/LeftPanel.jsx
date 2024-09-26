import ProductGrid from "../product/ProductGrid"
import { FilterSection } from "./FilterSection"
import { LeftPanelHeader } from "./LeftPanelHeader";

export const LeftPanel=({addProductToCart}) =>{
  
  const headerTitle="React E-Commerce App"
    return (
      <div>
       <LeftPanelHeader title={headerTitle} />
      <FilterSection />
      <ProductGrid addProductToCart={addProductToCart} />
    </div>
    )
  }