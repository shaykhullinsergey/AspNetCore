import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class MenuListItem extends ControlElement<ControlElementProps> {
	public render() {
		const className = this.classNames()

		return (
			<li className={className}>
				{this.props.children}
			</li>
		)
	}
}