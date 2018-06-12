import * as React from 'react';
import {Message, MessageProps} from 'Components/Message';

export class MessageBlock extends React.Component<MessageProps> {

	private renderMessage(message: Message) {
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