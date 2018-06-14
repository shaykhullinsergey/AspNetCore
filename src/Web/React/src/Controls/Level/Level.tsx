import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class Level extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('level')

		return (
			<nav className={className}>
				{this.props.children}
			</nav>
		)
	}
}

