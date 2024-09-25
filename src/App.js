//import { LeftPanel } from "./components/leftPanel/LeftPanel";
import { LeftPanel } from "./components/LeftPanel/LeftPanel";
import { RightPanel } from "./components/rightPanel/RightPanel";

function App() {
  return (
    <div className="bg-gray-200">
      <div className="flex container mx-auto">
      <LeftPanel />
      <RightPanel />
        </div>   
    </div>
    

  );
}

export default App;
