import * as React from 'react'

import { ControlType } from 'Controls'
import { Button } from 'Controls/Button'

import { MessageViewModel } from 'Components/Message'

export interface MessageComponentState {
	messages: MessageViewModel[];
}

export class MessageComponent extends React.Component<{}, MessageComponentState> {

	constructor(props: {}) {
		super(props)
		this.state = { messages: null }
	}

	public componentDidMount() {
		// this.updateMessages()
	}

	// private updateMessages() {
	// 	Controller
	// 		.getAllMessages()
	// 		.then(responce => this.setState({ messages: responce.data.messages }))
	// }

	public render() {

		return (
				<Button text={"Hello"} type={ControlType.Black}/>
		)
	}
}

