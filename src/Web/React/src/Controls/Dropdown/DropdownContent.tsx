import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class DropdownContent extends Element<ElementProps> {

	public render() {
		const className = this.classNames('dropdown-content')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}