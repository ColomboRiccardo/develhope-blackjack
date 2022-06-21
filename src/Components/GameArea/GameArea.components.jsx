import React from 'react';
import Card from '../Card/Card.components';
//import { cards } from '../cards.json';

const GameArea = ({ cardsPlayed, houseCards }) => {
	return (
		<div className='GameArea'>
			<div className='PlayerArea'>
				{houseCards.map((item, index) => (
					<Card
						suit={item.suit}
						value={item.value}
						image={item.image}
						key={index + Math.random()}
					/>
				))}
			</div>
			<div className='PlayerArea'>
				{cardsPlayed.map((item, index) => (
					<Card
						suit={item.suit}
						value={item.value}
						image={item.image}
						key={index + Math.random()}
					/>
				))}
			</div>
		</div>
	);
};

export default GameArea;
