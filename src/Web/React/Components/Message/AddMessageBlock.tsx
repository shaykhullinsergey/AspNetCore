import * as React from 'react'
import {Field, FieldLabel, FieldBody, Label, ControlElement as Control, Input, InputInputType, ControlState} from 'Controls'

import { MessageViewModel } from 'Components/Message'
import {ControlMode} from "Controls/ControlMode"

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
				<Field mode={ControlMode.Horizontal}>
					<FieldLabel mode={ControlMode.Normal}>
						<Label text={"Form"} />
					</FieldLabel>
					
					<FieldBody>
						<Field>
							<Control>
								<Input text={"me@example.com"} 
									inputType={InputInputType.Email}
									state={ControlState.Static}
									readonly />
							</Control>
						</Field>
					</FieldBody>

					<Field mode={ControlMode.Horizontal}>
						<FieldLabel mode={ControlMode.Normal}>
							<Label text={"To"}/>
						</FieldLabel>
						
						<FieldBody>
							<Field>
								<Control>
									<Input inputType={InputInputType.Email} 
										placeholder={"Recipient email"} />
								</Control>
							</Field>
						</FieldBody>
					</Field>
				</Field>
			</div>)
	}
}