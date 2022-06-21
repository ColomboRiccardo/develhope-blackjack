import './App.css';
import Display from './Components/Display/Display.components';
import GameArea from './Components/GameArea/GameArea.components';
import InputArea from './Components/InputArea/InputArea.components';
import { useState } from 'react';
import { randomCard, changeMessage, valueForCards } from './utils';

function App() {
	const [cardsSum, setCardsSum] = useState(0);
	const [cardsPlayed, setCardsPlayed] = useState([]);
	const [gameState, setGameState] = useState('ready');

	const addCard = () => {
		const newCard = randomCard();
		setGameState('playing');
		setCardsPlayed([...cardsPlayed, newCard]);
		setCardsSum(cardsSum + valueForCards(newCard.value));
		setTimeout(() => {
			return console.log(cardsSum, cardsPlayed, gameState);
		});
	};

	return (
		<div className='Blackjack'>
			<h1>Blackjack</h1>
			<Display messageToDisplay={changeMessage(gameState)} />
			<GameArea cardsPlayed={cardsPlayed} />
			<InputArea addCard={addCard} />
		</div>
	);
}

export default App;

//TODO
//implementare il meccanismo di partenza e chiusura del gioco

//lo state è indietro di due carte

//implementiamo il single player

//implementiamo l'altro giocatore

//animare l'entrata delle carte
