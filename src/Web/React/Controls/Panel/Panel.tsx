import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class Panel extends ControlElement<ControlElementProps> {
	public render() {
		const className = this.classNames('panel')

		return (
			<nav className={className}>
				{this.props.children}
			</nav>
		)
	}
}