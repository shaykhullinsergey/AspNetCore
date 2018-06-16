import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class Panel extends Element<ElementProps> {
	public render() {
		const className = this.classNames('panel')

		return (
			<nav className={className}>
				{this.props.children}
			</nav>
		)
	}
}