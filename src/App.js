//import { LeftPanel } from "./components/leftPanel/LeftPanel";
import { LeftPanel } from "./components/LeftPanel/LeftPanel";
import { RightPanel } from "./components/rightPanel/RightPanel";

function App() {
  return (
    <div className="container mx-auto bg-gray-200">
       <div className="flex">
       <LeftPanel />
       <RightPanel />
       </div>
    </div>
    

  );
}

export default App;
