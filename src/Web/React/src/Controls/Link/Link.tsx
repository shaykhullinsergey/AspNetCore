import { ControlElement, ControlElementProps } from '../ControlElement'
import * as React from 'react'

export interface LinkProps extends ControlElementProps{
	text: string
}

export class Link extends ControlElement<LinkProps>{
	public render() {
		const className = this.classNames()
		
		return(
			<a className={className}>{this.props.text}</a>
		)
	}
}