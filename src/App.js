//import { LeftPanel } from "./components/leftPanel/LeftPanel";
import { LeftPanel } from "./components/LeftPanel/LeftPanel";
import { RightPanel } from "./components/rightPanel/RightPanel";

function App() {
  return (
    <div className="bg-gray-200 flex flex-row">
        <LeftPanel />
        <RightPanel />
    </div>
    

  );
}

export default App;
