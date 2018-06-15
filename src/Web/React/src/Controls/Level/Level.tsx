import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class Level extends Element<ElementProps> {

	public render() {
		const className = this.classNames('level')

		return (
			<nav className={className}>
				{this.props.children}
			</nav>
		)
	}
}

