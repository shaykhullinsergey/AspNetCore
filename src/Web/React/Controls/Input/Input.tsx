import * as React from 'react'
import * as classNames from 'classnames'

export enum InputInputType {
	Text = 'text',
	Number = 'number',
	Password = 'password',
	Radio = 'radio'
}

export enum InputType {
	Primary = 'is-primary',
	Info = 'is-info',
	Success = 'is-success',
	Warning = 'is-warning',
	Danger = 'is-danger'
}

export enum InputSize {
	Small = 'is-small',
	Normal = 'is-normal',
	Medium = 'is-medium',
	Large = 'is-large'
}

export enum InputStyle {
	Normal = '',
	Rounded = 'is-rounded'
}

export enum InputState {
	Normal = '',
	Hover = 'is-hovered',
	Focus = 'is-focused',
	Loading = 'is-loading',
	Disabled = 'is-disabled',
	Static = 'is-static'
}

export interface InputProps {
	value: string
	placeholder?: string
	type?: InputType
	size?: InputSize
	style?: InputStyle
	state?: InputState
	inputType?: InputInputType
	onChange(value: string): void
}

export class Input extends React.Component<InputProps> {
	
	public render() {
		const className = classNames(
			'input',
			this.props.type,
			this.props.size, 
			this.props.style,
			this.props.state
		)
		
		return (
			<input className={className}
				type={this.props.inputType || InputInputType.Text}
				value={this.props.value}
				placeholder={this.props.placeholder}
				onChange={event => this.props.onChange(event.target.value)}>
			</input>
		)
	}
}