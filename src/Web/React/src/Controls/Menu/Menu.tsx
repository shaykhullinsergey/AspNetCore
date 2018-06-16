import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class Menu extends Element<ElementProps> {
	public render() {
		const className = this.classNames('menu')
		
		return(
			<aside className={className}>
				{this.props.children}
			</aside>
		)
	}
}