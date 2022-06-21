import CardList from './cards.json';

export function randomCard() {
	const myCard = CardList[Math.floor(Math.random() * CardList.length)];
	//console.log(myCard);
	return myCard;
}

export const changeMessage = gameState => {
	let gameMessage = '';
	switch (gameState) {
		case 'ready':
			gameMessage = 'Premi il bottone per iniziare il gioco';
			break;
		case 'playing':
			gameMessage = 'Chiedi una nuova carta oppure chiudi';
			break;
		case 'winning':
			gameMessage = 'Hai vinto!';
			break;
		case 'losing':
			gameMessage = 'Hai perso!';
			break;
		default:
			break;
	}
	return gameMessage;
};

export const valueForCards = valueOfACard => {
	if (valueOfACard === 'K' || valueOfACard === 'J' || valueOfACard === 'Q')
		return 10;
	if (valueOfACard === 'A') return 1;
	return valueOfACard;
};

export const croupier = (houseCards, setHouseCards, cardsSum, setGameState) => {
	console.log(houseCards, cardsSum);
	for (let i = 0; i < 20; i++) {
		const houseCardsSum = houseCards.reduce(
			(sum, item) => sum + valueForCards(item.value),
			0
		);
		if (houseCardsSum < cardsSum && houseCardsSum < 21) {
			setHouseCards([...houseCards, randomCard()]);
		}
		if (houseCardsSum >= cardsSum && houseCardsSum <= 21) {
			setGameState('losing');
			i += 20;
		}
		if (houseCardsSum > 21) {
			setGameState('winning');
			i += 20;
		}
	}
};
