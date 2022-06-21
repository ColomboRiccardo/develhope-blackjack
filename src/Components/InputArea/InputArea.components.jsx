import React, { Component } from 'react';
import GameButton from '../GameButton/GameButton.components';

export default class InputArea extends Component {
	render() {
		return (
			<div className='InputArea'>
				<GameButton addCard={this.props.addCard} />
				<GameButton setPlayerTurn={this.props.setPlayerTurn} />
				{this.props.gameState === 'losing' && (
					<GameButton resetGame={this.props.resetGame} />
				)}
			</div>
		);
	}
}
