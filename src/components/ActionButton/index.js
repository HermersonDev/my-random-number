import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const ActionButton = ({ to, replace, btnClass, textValue }) => (
	<Link to={to} replace={replace} className={btnClass}>{textValue}</Link>
);

export default ActionButton;