import React from 'react';

// Pages
import Home from './pages/Home';
import Load from './pages/Load';
import RandomNumber from './pages/RandomNumber';
import GameOver from './pages/GameOver';
import HowToPlay from './pages/HowToPlay';

function App() {
  return (
    <div className="App">
		{/*
			<Load /> 
			<RandomNumber />
			<Home /> 
			<GameOver />
		*/}
		<HowToPlay /> 
    </div>
  );
}

export default App;
