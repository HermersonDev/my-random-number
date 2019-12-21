import React from 'react';

import '../styles/random-number.css';

//Components
import ActionButton from '../components/ActionButton';

const RandomNumber = () => (
	<div id="random-number-page" className="screen">
		<p>Is this your number?</p>
		<p id="number">10</p>
		<div id="actions">
			<ActionButton to="/" replace={false} btnClass="btn-action"  textValue="It's smaller" />
			<ActionButton to="/game-over" replace={false} btnClass="btn-action btn-action-primary" textValue="Yes!" />
			<ActionButton to="/random-number" replace={true} btnClass="btn-action"  textValue="It's bigger" />
		</div>		
	</div>
);

export default RandomNumber;