import React from 'react';
import Card from '../Card/Card.components';
//import { cards } from '../cards.json';

const GameArea = ({ cardsPlayed }) => {
	return (
		<div className='GameArea'>
			{cardsPlayed.map((item, index) => (
				<Card
					suit={item.suit}
					value={item.value}
					image={item.image}
					key={index + Math.random()}
				/>
			))}
		</div>
	);
};

export default GameArea;
