import React from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';

// Pages 
import Home from './pages/Home';
import Load from './pages/Load';
import RandomNumber from './pages/RandomNumber';
import GameOver from './pages/GameOver';
import HowToPlay from './pages/HowToPlay';
import EasterEgg from './pages/EasterEgg';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/load" component={Load} />
			<Route path="/random-number" component={RandomNumber} />
			<Route path="/game-over/:att" component={GameOver} />
			<Route path="/how-to-play" component={HowToPlay} />
			<Route path="/u-are-a-joker" component={EasterEgg} />
		</Switch>
	</Router>
);

export default Routes;