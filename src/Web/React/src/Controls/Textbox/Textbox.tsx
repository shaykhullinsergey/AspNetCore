import * as React from 'react'
import { ChangeElementProps, Element } from 'controls'

export enum InputType {
	Text = 'text',
	Number = 'number',
	Password = 'password',
	Email = 'email',
	Phone = 'tel',
}

export interface TextboxProps extends ChangeElementProps {
	placeholder?: string
	inputType?: InputType
	checked?: boolean
}

export interface TextboxState {
	value?: string
}

export class Textbox extends Element<TextboxProps, TextboxState> {

	constructor(props: TextboxProps) {
		super(props)
		
		this.state = {value: null}
	}
	
	private onChange(value: string) {
		this.setState({value: value})
		this.props.onChange && this.props.onChange(value)
	}
	
	public render() {
		const className = this.classNames('input')

		return (
			<input className={className}
				type={this.props.inputType || InputType.Text}
				value={this.state.value}
				placeholder={this.props.placeholder}
				onChange={event => this.onChange(event.target.value)}
				readOnly={this.props.readonly}
				checked={this.props.checked}>
			</input>
		)
	}
}