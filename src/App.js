import './App.css';
import Display from './Components/Display/Display.components';
import GameArea from './Components/GameArea/GameArea.components';
import InputArea from './Components/InputArea/InputArea.components';
import { useEffect, useState } from 'react';
import { randomCard, changeMessage, valueForCards, croupier } from './utils';

function App() {
	const [cardsSum, setCardsSum] = useState(0);
	const [cardsPlayed, setCardsPlayed] = useState([]);
	const [gameState, setGameState] = useState('ready');
	const [playerTurn, setPlayerTurn] = useState(true);

	const [houseCards, setHouseCards] = useState([]);

	const addCard = () => {
		if (playerTurn && gameState !== 'losing') {
			const newCard = randomCard();
			setGameState('playing');
			setCardsPlayed([...cardsPlayed, newCard]);
			setCardsSum(cardsSum + valueForCards(newCard.value));
			setTimeout(() => {
				return console.log(cardsSum, cardsPlayed, gameState);
			});
		}
	};

	const resetGame = () => {
		setCardsSum(0);
		setCardsPlayed([]);
		setGameState('ready');
		setPlayerTurn(true);
		setHouseCards([]);
	};

	useEffect(() => {
		if (cardsSum > 21) {
			setGameState('losing');
		}
		if (!playerTurn) {
			croupier(houseCards, setHouseCards, cardsSum, setGameState);
			console.log(gameState);
		}
	}, [cardsSum, playerTurn, houseCards, setHouseCards, setGameState]);

	return (
		<div className='Blackjack'>
			<h1>Blackjack</h1>
			<Display messageToDisplay={changeMessage(gameState)} />
			<GameArea cardsPlayed={cardsPlayed} houseCards={houseCards} />
			<InputArea
				addCard={addCard}
				setPlayerTurn={setPlayerTurn}
				gameState={gameState}
				resetGame={resetGame}
			/>
		</div>
	);
}

export default App;

//TODO

//dobbiamo avere due carte di default

//la carta del croupier è una coperta e una scoperta

//animare l'entrata delle carte

//implementare un mazzo che abbia 4x52 carte

//implementare il valore dell'asso

//aggiungere altri giocatori
