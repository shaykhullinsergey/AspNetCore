import * as React from 'react'
import { ControlElement, ControlElementProps } from '../ControlElement'

export class NavigationItem extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('nav-item')

		return (
			<span className={className}>
				{this.props.children}
			</span>
		)
	}
}