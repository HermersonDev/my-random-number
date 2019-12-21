import React from 'react';

// Pages
import Home from './pages/Home';
import Load from './pages/Load';
import RandomNumber from './pages/RandomNumber';

function App() {
  return (
    <div className="App">
		{/*
			<Load /> 
			<Home /> 
		*/} 
		<RandomNumber />
    </div>
  );
}

export default App;
