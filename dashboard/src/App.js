import "./styles/App.css";
import Nav from "./components/Nav";
import WorkList from "./components/WorkList";
import { Route, Routes } from "react-router-dom";
import Finished from "./components/Finished";
import Pending from "./components/Pending";

function App() {


  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<WorkList />} />
        <Route path="/finished" element={<Finished />} />
        <Route path="/pending" element={<Pending />} />

      </Routes>
    </div>
  );
}

export default App;
