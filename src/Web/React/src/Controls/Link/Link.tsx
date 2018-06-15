import * as React from 'react'
import { Element, TextElementProps } from 'Controls'

export interface LinkProps extends TextElementProps {
	href?: string
}

export class Link extends Element<LinkProps>{
	public render() {
		const className = this.classNames()
		
		return(
			<a className={className} href={this.props.href}>
				{this.props.text}
			</a>
		)
	}
}