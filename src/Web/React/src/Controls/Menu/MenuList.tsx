import * as React from 'react'
import { ControlElement, ControlElementProps } from '../ControlElement'

export class MenuList extends ControlElement<ControlElementProps> {
	public render() {
		const className = this.classNames('menu-list')

		return (
			<ul className={className}>
				{this.props.children}
			</ul>
		)
	}
}