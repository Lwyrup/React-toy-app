import React, { Component } from 'react';

class Clock extends Component
{
	render()
	{
		return <p>The time is currently {new Date().toLocaleTimeString()}</p>
	}
}

export default Clock;