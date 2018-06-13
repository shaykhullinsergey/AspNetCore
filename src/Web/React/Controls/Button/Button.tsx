import * as React from 'react'
import * as classNames from 'classnames'

export enum ButtonType {
	White = 'is-white',
	Light = 'is-light',
	Dark = 'is-dark',
	Black = 'is-black',
	Text = 'is-text',
	Primary = 'is-primary',
	Link = 'is-link',
	Info = 'is-info',
	Success = 'is-success',
	Warning = 'is-warning',
	Danger = 'is-danger'
}

export enum ButtonSize {
	Small = 'is-small',
	Normal = '',
	Medium = 'is-medium',
	Large = 'is-large'
}

export enum ButtonStyle {
	Outlined = 'is-outlined',
	Inverted = 'is-inverted',
	Rounded = 'is-rounded'
}

export enum ButtonState {
	Normal = '',
	Selected = 'is-selected',
	Novered = 'is-hovered',
	Focused = 'is-focused',
	Active = 'is-active',
	Loading = 'is-loading',
	Static = 'is-static'
}

export interface ButtonProps {
	label: string
	type?: ButtonType
	size?: ButtonSize
	style?: ButtonStyle
	state?: ButtonState
	onClick(): void
}

export class Button extends React.Component<ButtonProps> {
	
	public render() {
		const className = classNames(
			"button",
			this.props.type,
			this.props.size,
			this.props.style,
			this.props.state
		)
		
		return (
			<span
				className={className}
				onClick={() => this.props.onClick()}>
				{this.props.label}
			</span>
		)
	}
}