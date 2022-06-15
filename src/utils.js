import CardList from './cards.json';

export function randomCard() {
	const myCard = CardList[Math.floor(Math.random() * CardList.length)];
	console.log(myCard);
	return myCard;
}
