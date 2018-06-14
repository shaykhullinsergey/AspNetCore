import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export interface TitleProps extends ControlElementProps {
	text: string
}

export class Title extends ControlElement<TitleProps> {
	public render() {
		const className = this.classNames('title')

		return (
			<p className={className}>{this.props.text}</p>
		)
	}
}