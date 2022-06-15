import React, { Component } from 'react';

export default class Card extends Component {
	render() {
		return (
			<div className='Card'>
				<h2>{this.props.value}</h2>
				<p>{this.props.suit}</p>
			</div>
		);
	}
}
