import * as React from 'react'

import { MessageViewModel } from 'components/Message'

export interface AddMessageState {
	message: MessageViewModel
}

export class AddMessageBlock extends React.Component<{}, AddMessageState> {

	public constructor(props: {}) {
		super(props)

		this.state = { message: { text: '' } }
	}

	public render() {
		return (
			<div>
				Add message block
			</div>)
	}
}