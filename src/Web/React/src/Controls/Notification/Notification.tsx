import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export interface NotificationProps extends ElementProps {
	text?: string
}

export class Notification extends Element<NotificationProps> {

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