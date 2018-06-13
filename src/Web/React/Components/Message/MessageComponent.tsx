import * as React from 'react'

import {Controller, AddMessageBlock, MessageBlock, MessageViewModel} from 'Components/Message'

export interface MessageComponentState {
	messages: MessageViewModel[];
}

export class MessageComponent extends React.Component<{}, MessageComponentState> {

	constructor(props: {}) {
		super(props)
		this.state = {messages: null}
	}
	
	public componentDidMount() {
		this.updateMessages()
	}
	
	private updateMessages() {
		Controller
			.getAllMessages()
			.then(responce => this.setState({messages: responce.data.messages}))
	}
	
	private onMessage(message: MessageViewModel) {
		Controller
			.addMessage(message)
			.then(responce => this.updateMessages())
	}
	
	public render() {
		
		const messageBlock = this.state.messages
			? <MessageBlock messages={this.state.messages}/>
			: null
		
		return (
			<div>
				{messageBlock}
				
				<AddMessageBlock 
					onMessage={message => this.onMessage(message)}/>
			</div>
		)
	}
}

