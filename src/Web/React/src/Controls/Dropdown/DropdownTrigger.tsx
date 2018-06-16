import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class DropdownTrigger extends Element<ElementProps> {

	public render() {
		const className = this.classNames('dropdown-trigger')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}