import React, { useState, useEffect } from 'react';
import './App.css';
import Counter from './components/Counter';


function App() {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
     <h1>jo</h1>
     <Counter/>
    </div>
  );
}

export default App;
