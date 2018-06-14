import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class Columns extends ControlElement<ControlElementProps> {
	public render() {

		const className = this.classNames('columns')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}