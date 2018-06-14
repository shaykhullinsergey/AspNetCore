import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export interface ButtonProps extends ControlElementProps {
	text: string
	onClick?: () => void
}

export class Button extends ControlElement<ButtonProps> {

	public render() {
		const className = this.classNames('button')

		return (
			<span
				className={className}
				onClick={() => this.props.onClick()}>
				{this.props.text}
			</span>
		)
	}
}