import React, { Component } from 'react';
import GameButton from '../GameButton/GameButton.components';

export default class InputArea extends Component {
	render() {
		return (
			<div className='InputArea'>
				<GameButton addCard={this.props.addCard} />
				<GameButton addCard={this.props.addCard} />
			</div>
		);
	}
}
