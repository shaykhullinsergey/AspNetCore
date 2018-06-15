import * as React from 'react'
import { Element, ElementProps } from '../Element'

export class NavigationItem extends Element<ElementProps> {

	public render() {
		const className = this.classNames('nav-item')

		return (
			<span className={className}>
				{this.props.children}
			</span>
		)
	}
}