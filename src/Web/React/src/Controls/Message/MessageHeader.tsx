import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class MessageHeader extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('message-header')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

