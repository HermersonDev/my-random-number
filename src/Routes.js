import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Pages 
import Home from './pages/Home';
import Load from './pages/Load';
import RandomNumber from './pages/RandomNumber';
import GameOver from './pages/GameOver';
import HowToPlay from './pages/HowToPlay';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/load" component={Load} />
			<Route path="/random-number" component={RandomNumber} />
			<Route path="/game-over" component={GameOver} />
			<Route path="/how-to-play" component={HowToPlay} />
		</Switch>
	</Router>
);

export default Routes;