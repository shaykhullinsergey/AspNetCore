import * as React from 'react';
import {MessageViewModel} from 'Components/Message';

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
		return (
			<ul>
				{this.props.messages.map(message => this.renderMessage(message))}
			</ul>
		)
	}
}