import "./styles/App.css";
import Nav from "./components/Nav";
import WorkList from "./components/WorkList";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Finished from "./components/Finished";
import Pending from "./components/Pending";

function App() {
  const [current, setCurrent] = useState();
  let currentTime = new Date().toLocaleString() + "";
  useEffect(() => {
    setTimeout(() => setCurrent(currentTime), 1000);
  });

  return (
    <div className="App">
      {current}
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
