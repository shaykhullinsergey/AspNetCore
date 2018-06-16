import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class DropdownMenu extends Element<ElementProps> {

	public render() {
		const className = this.classNames('dropdown-menu')

		return (
			<div className={className} id={'dropdown-menu'} role={'menu'}>
				{this.props.children}
			</div>
		)
	}
}