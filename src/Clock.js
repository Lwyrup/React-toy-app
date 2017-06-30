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

	componentDidMount()
	{
		this.timer = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount()
	{
		clearInterval(this.timer);
	}

	tick()
	{
		this.setState({date: new Date()})
	}
}

export default Clock;