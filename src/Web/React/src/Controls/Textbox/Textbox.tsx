import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export enum InputType {
	Text = 'text',
	Number = 'number',
	Password = 'password',
	Email = 'email',
	Phone = 'tel',
}

export interface TextboxProps extends ElementProps {
	text?: string
	placeholder?: string
	inputType?: InputType
	onChange?: (value: string) => void
	checked?: boolean
}

export class Textbox extends Element<TextboxProps> {

	public render() {
		const className = this.classNames('input')

		return (
			<input className={className}
				type={this.props.inputType || InputType.Text}
				value={this.props.text}
				placeholder={this.props.placeholder}
				onChange={event => this.props.onChange(event.target.value)}
				readOnly={this.props.readonly}
				checked={this.props.checked}>
			</input>
		)
	}
}