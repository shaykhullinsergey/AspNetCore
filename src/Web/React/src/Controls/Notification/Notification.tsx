import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export interface NotificationProps extends ControlElementProps {
	text?: string
}

export class Notification extends ControlElement<NotificationProps> {

	public render() {
		const className = this.classNames('notification')

		return (
			<div className={className}>
				{this.props.text}
				{this.props.children}
			</div>
		)
	}
}