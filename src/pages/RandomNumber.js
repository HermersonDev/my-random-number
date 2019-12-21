import React from 'react';

import '../styles/random-number.css';

//Components
import ActionButton from '../components/ActionButton';

const RandomNumber = () => (
	<div id="random-number-page" className="screen">
		<p>Is this your number?</p>
		<p id="number">10</p>
		<div id="actions">
			<ActionButton textValue="It's smaller" />
			<ActionButton btnClass="btn-primary" textValue="Yes!" />
			<ActionButton textValue="It's bigger" />
		</div>		
	</div>
);

export default RandomNumber;