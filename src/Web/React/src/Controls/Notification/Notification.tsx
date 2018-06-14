import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class Notification extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('notification')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}