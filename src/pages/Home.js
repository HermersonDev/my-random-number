import React from 'react';

import "../styles/home.css";

//Components
import Button from '../components/Button';

const Home = () => (
	<div id="page-home">
		<p id="header">Created by <a class="link" href="https://github.com/HermersonDev">@hdev_</a></p>
		
		<div id="main">
			<h1>MyRandom<br/>Number</h1>
			<Button textValue="PLAY!"/>
		</div>

		<a id="link-footer" class="link" href="#">How to play?</a>

		<p id="number-0">0</p>
		<p id="number-1">1</p>
		<p id="number-2">2</p>
		<p id="number-3">3</p>
		<p id="number-4">4</p>
		<p id="number-5">5</p>
		<p id="number-6">6</p>
		<p id="number-7">7</p>
		<p id="number-8">8</p>
		<p id="number-9">9</p>
	</div>
);

export default Home;