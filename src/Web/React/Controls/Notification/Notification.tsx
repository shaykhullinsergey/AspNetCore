import * as React from 'react'
import * as classNames from 'classnames'

export enum NotificationType {
	Primary = 'is-primary',
	Link = 'is-link',
	Info = 'is-info',
	Success = 'is-success',
	Warning = 'is-warning',
	Danger = 'is-danger'
}

export interface NotificationProps {
	type?: NotificationType
}

export class Notification extends React.Component<NotificationProps> {
	
	public render() {
		
		const className = classNames(
			"notification",
			this.props.type
		)
		
		return(
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}