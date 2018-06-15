import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class MenuList extends Element<ElementProps> {
	public render() {
		const className = this.classNames('menu-list')

		return (
			<ul className={className}>
				{this.props.children}
			</ul>
		)
	}
}