import * as React from 'react'

import { MessageViewModel } from 'components/Message'

export interface AddMessageProps {
	onMessage(message: MessageViewModel): void;
}

export interface AddMessageState {
	message: MessageViewModel
}

export class AddMessageBlock extends React.Component<AddMessageProps, AddMessageState> {

	public constructor(props: AddMessageProps) {
		super(props)

		this.state = { message: { text: '' } }
	}

	public render() {
		return (
			<div>
				
			</div>)
	}
}