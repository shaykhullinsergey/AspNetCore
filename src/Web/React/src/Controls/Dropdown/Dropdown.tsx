import * as React from 'react'
import { Element, ElementProps } from '..'

export class Dropdown extends Element<ElementProps> {

	public render() {
		const className = this.classNames('dropdown')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

