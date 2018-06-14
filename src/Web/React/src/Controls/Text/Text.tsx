import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export interface TextProps extends ControlElementProps{
	text?: string
}

export class Text extends ControlElement<TextProps>{
	public render() {
		const className = this.classNames()
		
		return(
			<p className={className}>
				{this.props.text}
				{this.props.children}
			</p>
		)
	}
}