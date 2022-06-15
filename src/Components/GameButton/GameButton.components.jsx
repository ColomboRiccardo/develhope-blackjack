import React from 'react';
const GameButton = ({ addCard }) => {
	return (
		<button className='GameButton' onClick={addCard}>
			Raise
		</button>
	);
};

export default GameButton;
