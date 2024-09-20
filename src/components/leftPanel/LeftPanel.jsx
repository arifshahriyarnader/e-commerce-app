import ProductGrid from "../product/ProductGrid"
import { FilterSection } from "./FilterSection"

export const LeftPanel=() =>{
  const products = [
    {
      id: 1,
      name: 'Gaming Laptop',
      price: 1500,
      image: 'https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-gaming-3/ideapad-gaming-3-001-228x228.jpg',
      categories: ['Laptops', 'Gaming'],
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      price: 50,
      image: 'https://www.startech.com.bd/image/cache/catalog/mouse/zoook/clique/clique-01-500x500.jpg',
      categories: ['Accessories', 'Peripherals'],
    },
    {
      id: 3,
      name: 'Gaming Keyboard',
      price: 100,
      image: 'https://www.startech.com.bd/image/cache/catalog/keyboard/meetion/mt-k9320/mt-k9320-01-500x500.jpg',
      categories: ['Accessories', 'Peripherals'],
    },
    {
      id: 4,
      name: 'External Hard Drive',
      price: 120,
      image: 'https://www.startech.com.bd/image/cache/catalog/portable-hdd%20/lacie/10tb-d2-professional/lacie-10tb-d2-professional-01-500x500.jpg',
      categories: ['Storage', 'Accessories'],
    },
    {
      id: 5,
      name: 'Graphics Card',
      price: 500,
      image: 'https://www.startech.com.bd/image/cache/catalog/graphics-card/colorful/geforce-gt710-2gd3/geforce-gt710-2gd3-1-500x500.jpg',
      categories: ['Components', 'Gaming'],
    },
    {
      id: 6,
      name: 'Portable SSD',
      price: 200,
      image: 'https://www.startech.com.bd/image/cache/catalog/ssd/colorful/sl500/sl500-500x500.JPG',
      categories: ['Storage', 'Accessories'],
    },
    {
      id: 7,
      name: 'Gaming Monitor',
      price: 300,
      image: 'https://www.startech.com.bd/image/cache/catalog/monitor/gigabyte/gs32q/gs32q-01-500x500.webp',
      categories: ['Monitors', 'Gaming'],
    },
    {
      id: 8,
      name: 'Wireless Headphone',
      price: 500,
      image: 'https://www.startech.com.bd/image/cache/catalog/headphone/wiwu/elite/elite-01-500x500.webp',
      categories: ['Accessories', 'Peripherals'],
    },
    {
      id: 9,
      name: 'All-in-One Printer',
      price: 150,
      image: 'https://www.startech.com.bd/image/cache/catalog/printer/g-printer/gp-c80180ii/gp-c80180ii-01-500x500.webp',
      categories: ['Peripherals', 'Printers'],
    },
  ];
    return (
      <div>
      <div>
        <h1>E-commerce App</h1>
      </div>
      <FilterSection />
      <ProductGrid products={products} />
    </div>
    )
  }