import React from 'react';

import '../styles/game-over.css';

// Components
import Button from '../components/Button';

const GameOver = ({ match }) => (
	<div id="game-over-page" className="screen">
		<div id="play-again">
			<p>Nice!</p>
			<Button to="/load" btnClass="btn btn-primary" textValue="PLAY AGAIN!" />
		</div>
		<p id="attempts"> {match.params.att} Attempts </p>
	</div>
);

export default GameOver;