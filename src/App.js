import React from 'react';

// Pages
import Home from './pages/Home';
import Load from './pages/Load';
import RandomNumber from './pages/RandomNumber';
import GameOver from './pages/GameOver';

function App() {
  return (
    <div className="App">
		{/*
			<Load /> 
			<RandomNumber />
			<Home /> 
		*/} 
		<GameOver />
    </div>
  );
}

export default App;
