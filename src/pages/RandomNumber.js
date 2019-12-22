import React, { useState, useEffect }from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../styles/random-number.css';

const RandomNumber = () => {
	const [number, setNumber] = useState();
	const [limit, setLimit] = useState({ min: 0, max: 100, aux: 100 });
	const [attempt, setAttempt] = useState(1);

	useEffect(() => {
		getRandomNumber();

	}, [limit, attempt]);

	function smaller() {
		setLimit({
			min: limit.min,
			max: number,
			aux: number
		});
		setAttempt(attempt + 1);
		getRandomNumber();
	}

	function bigger() {
		setLimit({
			min: number,
			max: limit.max,
			aux: number
		});
		setAttempt(attempt + 1);
		getRandomNumber();
	}

	function getRandomNumber() {
		const randomNumber = Math.round(Math.random() * (limit.max - limit.min) + limit.min);
		setNumber(randomNumber);
	};

	 if (limit.min === limit.aux && limit.max === limit.aux)
	 	return <Redirect to="/u-are-a-joker" />

	return (
		<div id="random-number-page" className="screen">
			<p>Is this your number?</p>
			<p id="number">{number}</p>
			<div id="actions">
				<button onClick={smaller} className="btn-action">
					It's smaller
				</button>
				<Link to={`/game-over/${attempt}`} className="btn-action btn-action-primary">Yes!</Link>
				<button onClick={bigger} className="btn-action">
					It's bigger
				</button>
			</div>		
		</div>
	);
}

export default RandomNumber;