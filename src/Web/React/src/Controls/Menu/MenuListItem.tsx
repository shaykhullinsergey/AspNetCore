import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class MenuListItem extends Element<ElementProps> {
	public render() {
		const className = this.classNames()

		return (
			<li className={className}>
				{this.props.children}
			</li>
		)
	}
}