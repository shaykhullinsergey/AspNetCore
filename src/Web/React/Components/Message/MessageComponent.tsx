import * as React from 'react'

import {Controller} from 'Controllers/Message';
import {MessageState, MessageBlock, AddMessageBlock} from '.'

export class MessageComponent extends React.Component<{}, MessageState> {

	constructor(props: {}) {
		super(props)
		this.state = {messages: null}
	}
	
	public async componentDidMount() {
		console.log("1")
		const viewModel = await Controller.getAll()
		
		console.log(viewModel)
		await this.setState({messages: viewModel.data.messages})
	}
	
	public render() {
		
		const messageBlock = this.state.messages
			? <MessageBlock messages={this.state.messages}/>
			: null
		
		return (
			<div>
				{messageBlock}
				<AddMessageBlock/>
			</div>
		)
	}
}

