import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export enum InputInputType {
	Text = 'text',
	Number = 'number',
	Password = 'password',
	Radio = 'radio',
	Email = 'email',
	Phone = 'tel'
}

export interface InputProps extends ControlElementProps {
	text?: string
	placeholder?: string
	inputType?: InputInputType
	onChange?: (value: string) => void
}

export class Input extends ControlElement<InputProps> {

	public render() {
		const className = this.classNames('input')

		return (
			<input className={className}
				type={this.props.inputType || InputInputType.Text}
				value={this.props.text}
				placeholder={this.props.placeholder}
				onChange={event => this.props.onChange(event.target.value)}
				readOnly={this.props.readonly}>
			</input>
		)
	}
}