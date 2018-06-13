import * as React from 'react'

import { Button, ButtonType } from 'Controls/Button'
import { Input } from 'Controls/Input'
import { MessageViewModel } from 'Components/Message'
import { ButtonGroup, ButtonGroupType } from 'Controls/ButtonGroup'

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

	private onAddMessageButtonClick() {
		const { message } = this.state
		this.props.onMessage(message)

		this.setState({ message: { text: '' } })
	}

	private onTextBoxChanged(value: string) {
		this.setState({ message: { ...this.state.message, text: value } })
	}

	public render() {
		return (
			<div>
				<Input value={this.state.message.text}
					onChange={value => this.onTextBoxChanged(value)}/>

				<ButtonGroup type={ButtonGroupType.Addons}>
					<Button label={'Add'}
						type={ButtonType.Dark}
						onClick={() => this.onAddMessageButtonClick()}/>

					<Button label={'Add'}
						type={ButtonType.Dark}
						onClick={() => this.onAddMessageButtonClick()}/>
				</ButtonGroup>
			</div>)
	}
}