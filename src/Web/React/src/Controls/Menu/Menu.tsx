import * as React from 'react'
import { ControlElement, ControlElementProps } from '../ControlElement'

export class Menu extends ControlElement<ControlElementProps> {
	public render() {
		const className = this.classNames('menu')
		
		return(
			<aside className={className}>
				{this.props.children}
			</aside>
		)
	}
}