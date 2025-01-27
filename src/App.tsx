import Sidebar from "Component/Shared/Sidebar";
import Movies from "./pages/Movies";

function App() {
  return (
    <div className="min-h-screen min-w-screen">
      <Sidebar>
        <Movies />
      </Sidebar>
    </div>
  );
}

export default App;
