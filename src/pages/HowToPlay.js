import React from 'react';

import '../styles/how-to-play.css';

//Components
import Button from '../components/Button';

const HowToPlay = () => (
	<div id="how-to-play-page" className="screen">
		<div id="en">
			<p>EN</p>
			<p>Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. </p>
		</div>
		<div id="pt">
			<p>PT</p>
			<p>Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. </p>
		</div>
		<Button to="/" btnClass="btn" textValue="BACK" />
	</div>
);

export default HowToPlay;