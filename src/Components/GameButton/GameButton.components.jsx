import React from 'react';
const GameButton = ({ addCard, setPlayerTurn, resetGame }) => {
	const buttonFunction = (addCard, setPlayerTurn) => {
		if (!!addCard) {
			return (
				<button className='GameButton' onClick={addCard}>
					Raise
				</button>
			);
		}

		if (!!setPlayerTurn) {
			return (
				<button className='GameButton' onClick={() => setPlayerTurn(false)}>
					Pass
				</button>
			);
		}

		if (!!resetGame) {
			return (
				<button className='GameButton' onClick={resetGame}>
					New Game
				</button>
			);
		}
	};
	return <>{buttonFunction(addCard, setPlayerTurn)}</>;
};

export default GameButton;
