import * as React from 'react';

import {MessageViewModel} from 'Components/Message'

export interface AddMessageProps {
	onMessage(message: MessageViewModel): void;
}

export interface AddMessageState {
	message: MessageViewModel
}

export class AddMessageBlock extends React.Component<AddMessageProps, AddMessageState> {
	
	public constructor(props: AddMessageProps) {
		super(props)
		
		this.state = {message: {text: ""}}
	}
	
	private onAddMessageButtonClick() {
		const {message} = this.state
		
		this.props.onMessage(message)
		this.setState({message: {text: ""}})
	}
	
	private renderAddMessageButton() {
		return (<button onClick={() => this.onAddMessageButtonClick()}>Add</button>)
	}
	
	private onAddMessageTextareaChanged(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({message: {...this.state.message, text: event.target.value}})
		console.log(event.target.value)
	}
	
	private renderAddMessageTextBox() {
		return (<input onChange={event => this.onAddMessageTextareaChanged(event)} value={this.state.message.text}/>)
	}
	
	public render() {
		return (
			<div>
				{this.renderAddMessageTextBox()}
				{this.renderAddMessageButton()}
			</div>)
	}
}