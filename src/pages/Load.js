import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import '../styles/load.css';

const Load = () => {
	const [loadTime, setLoadTime] = useState(10);

	useEffect(() => {

		if (loadTime > 0)
			setTimeout(timer, 1000);

	}, [loadTime]);

	function timer() {
		setLoadTime(loadTime - 1);
	}

	if (loadTime === 0)
		return <Redirect to="/random-number" />

	return (
		<div id="load-page" className="screen">
			<h1 id="number-count">{loadTime}</h1>
			<p>Think of a number from 0 to 100!</p>
		</div>
	);
};

export default Load;