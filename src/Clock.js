import React, { Component } from 'react';

class Clock extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {date: new Date()}
	}

	render()
	{
		return <p>The time is currently { this.state.date.toLocaleTimeString() }</p>
	}
}

export default Clock;