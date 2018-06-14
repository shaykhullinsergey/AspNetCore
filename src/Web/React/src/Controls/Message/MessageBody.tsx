import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class MessageBody extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('message-body')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}