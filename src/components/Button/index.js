import React from 'react';

import './styles.css';

const Button = ({ btnClass, textValue }) => {
	return <button className={btnClass}>{textValue}</button>;
}

export default Button;