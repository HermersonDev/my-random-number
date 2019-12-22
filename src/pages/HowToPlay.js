import React from 'react';

import '../styles/how-to-play.css';

//Components
import Button from '../components/Button';

const HowToPlay = () => (
	<div id="how-to-play-page" className="screen">
		<div id="en">
			<p>EN</p>
			<p>This game is quite simple, just think of a number from 0 to 100. Then the algorithm will try to guess. :)</p>
		</div>
		<div id="pt">
			<p>PT</p>
			<p>Este jogo é bastante simples, basta pensar em um número de 0 a 100. Então o algoritmo tentará adivinhar. :)</p>
		</div>
		<Button to="/" btnClass="btn" textValue="BACK" />
	</div>
);

export default HowToPlay;