import React from 'react';

import './styles.css';

const ActionButton = ({ btnClass, textValue }) => (
	<button className={btnClass}>{textValue}</button>
);

export default ActionButton;