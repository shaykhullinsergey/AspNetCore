import * as React from 'react'
import { ClickElementProps, Element, TextElementProps } from 'controls'

export interface LinkProps extends TextElementProps, ClickElementProps {
	href?: string
}

export class Link extends Element<LinkProps> {
	public render() {
		const className = this.classNames()
		
		return(
			<a className={className} href={this.props.href}>
				{this.props.text}
				{this.props.children}
			</a>
		)
	}
}