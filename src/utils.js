import CardList from './cards.json';

export function randomCard() {
	const myCard = CardList[Math.floor(Math.random() * CardList.length)];
	console.log(myCard);
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
