import * as React from 'react'
import { ControlElement, ControlElementProps } from '../ControlElement'

export class MenuLabel extends ControlElement<ControlElementProps> {
	public render() {
		const className = this.classNames('menu-label')

		return (
			<p className={className}>
				{this.props.children}
			</p>
		)
	}
}