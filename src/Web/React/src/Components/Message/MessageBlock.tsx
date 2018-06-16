import * as React from 'react';
import {MessageViewModel} from 'components/Message';

export interface MessageBlockProps {
	messages: MessageViewModel[];
}

export class MessageBlock extends React.Component<MessageBlockProps> {

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
		const messages = this.props.messages
			? this.props.messages.map(message => this.renderMessage(message))
			: null
		
		return (
			<ul>
				{messages}
			</ul>
		)
	}
}