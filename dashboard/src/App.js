import './styles/App.css';
import Nav from './components/Nav';
import WorkList from './components/WorkList';
import React, {useState, useEffect} from 'react';

function App() {
  const [current, setCurrent] = useState()
  let currentTime = new Date().toLocaleString() + ""
  useEffect(()=> {
    setTimeout(()=> setCurrent(currentTime), 1000)
  })
  
  
  return (
    <div className="App">
      {current}
      <Nav />
      <WorkList />
    </div>
  );
}

export default App;
