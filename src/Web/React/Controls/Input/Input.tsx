import * as React from 'react'
import {ControlElement as Control, ControlElementProps as ControlProps} from 'Controls/ControlMode'

export enum InputInputType {
	Text = 'text',
	Number = 'number',
	Password = 'password',
	Radio = 'radio',
	Email = 'email',
	Phone = 'tel'
}

export interface InputProps extends ControlProps {
	text?: string
	placeholder?: string
	inputType?: InputInputType
	onChange?: (value: string) => void
}

export class Input extends Control<InputProps> {
	
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