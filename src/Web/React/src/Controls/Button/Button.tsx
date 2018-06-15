import * as React from 'react'
import { Element, TextElementProps, ClickElementProps } from 'Controls'

export interface ButtonProps extends TextElementProps, ClickElementProps {
}

export class Button extends Element<ButtonProps> {

	public render() {
		const className = this.classNames('button')

		return (
			<button
				className={className}
				onClick={() => this.props.onClick()}>
				{this.props.text}
			</button>
		)
	}
}