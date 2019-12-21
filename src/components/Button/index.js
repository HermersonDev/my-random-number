import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Button = ({ to, btnClass, textValue }) => {
	return <Link to={to} className={btnClass}>{textValue}</Link>;
}

export default Button;