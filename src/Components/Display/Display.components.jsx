import React, { Component } from 'react';

export default class Display extends Component {
	render() {
		return (
			<div className='Display'>
				<p>{this.props.message}</p>
			</div>
		);
	}
}
