import { CartProvider } from "./contexts";
import {LeftPanel, RightPanel} from './components'

function App() {
  return (
    <CartProvider>
      <div className="bg-gray-200">
      <div className="flex container mx-auto">
      <LeftPanel />
      <RightPanel />
        </div>   
    </div>
    </CartProvider>
  );
}

export default App;
