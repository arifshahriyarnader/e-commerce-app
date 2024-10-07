import { Cart } from "./cart/Cart"

export const RightPanel=() =>{
  
    return (
      <div className="lg:w-1/4 lg:ml-8">
        <div className="mb-8">
      <h1 className="text-xl font-semibold mb-2">Cart</h1>
      <Cart />
      </div>
      <div>
      <button className="bg-blue-500 hover:bg-blue-700
                 text-white font-bold py-2 px-4
                  rounded mt-4">Checkout</button>
      </div>
    </div>
    )
  }