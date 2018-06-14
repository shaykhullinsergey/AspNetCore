import * as React from 'react'

import { Content, Box, Delete, Notification } from 'Controls'
import { Controller, AddMessageBlock, MessageBlock, MessageViewModel } from 'Components/Message'

export interface MessageComponentState {
	messages: MessageViewModel[];
}

export class MessageComponent extends React.Component<{}, MessageComponentState> {

	constructor(props: {}) {
		super(props)
		this.state = { messages: null }
	}

	public componentDidMount() {
		this.updateMessages()
	}

	private updateMessages() {
		Controller
			.getAllMessages()
			.then(responce => this.setState({ messages: responce.data.messages }))
	}

	private onMessage(message: MessageViewModel) {
		Controller
			.addMessage(message)
			.then(responce => this.updateMessages())
	}

	public render() {

		return (
			<Content>
				<Box>
					<Notification>
						<Delete onClick={() =>{}}/>
						Primar lorem ipsum dolor sit amet, consectetur
						adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
						consectetur adipiscing elit
					</Notification>
				</Box>
				
				<Box>
					<MessageBlock
						messages={this.state.messages}/>
	
					<AddMessageBlock
						onMessage={message => this.onMessage(message)}/>
				</Box>
				
				<div id={"ASD"}>
				</div>
			</Content>
		)
	}
}

