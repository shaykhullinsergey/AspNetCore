import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export interface TextProps extends ElementProps{
	text?: string | JSX.Element
}

export class Text extends Element<TextProps>{
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