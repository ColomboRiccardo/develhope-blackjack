import './App.css';
import Display from './Components/Display/Display.components';
import GameArea from './Components/GameArea/GameArea.components';
import InputArea from './Components/InputArea/InputArea.components';
import { useState } from 'react';
import { randomCard } from './utils';

function App() {
	const [game, setGame] = useState({
		cardsSum: 0,
		cardsPlayed: [],
		isGameOn: false,
		gameState: 'playing',
	});

	const addCard = () =>
		setGame({
			cardsPlayed: [...game.cardsPlayed, randomCard()],
		});

	return (
		<div className='Blackjack'>
			<h1>Blackjack</h1>
			<Display message='Premi il bottone per iniziare il gioco' />
			<GameArea cardsPlayed={game.cardsPlayed} />
			<InputArea addCard={addCard} />
		</div>
	);
}

export default App;
