import * as React from 'react';
import {MessageViewModel} from 'components/Message';
import {Component} from "components"
import {MessageType} from "services/Message"

export interface MessageBlockState {
	messages: MessageViewModel[];
}

export class MessageBlock extends Component<{}, MessageBlockState> {

	constructor(props: {}) {
		super(props)
		
		this.state = {messages: []}
	}
	
	public componentDidMount() {
		this.services
			.get(MessageType)
			.getAllMessages()
			.then(model => this.setState({messages: model.messages}))
	}
	
	private renderMessage(message: MessageViewModel) {
		return (
			<li key={message.id}>
				<strong>{message.id}</strong>
				{" "}
				<small>{message.text}</small>
			</li>
		)
	}

	public render() {
		const messages = this.state.messages
			? this.state.messages.map(message => this.renderMessage(message))
			: null
		
		return (
			<div>
				<span>Messages: </span>
				<ul>
					{messages}
				</ul>
			</div>
		)
	}
}