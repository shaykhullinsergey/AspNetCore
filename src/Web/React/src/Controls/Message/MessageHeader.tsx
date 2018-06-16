import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class MessageHeader extends Element<ElementProps> {

	public render() {
		const className = this.classNames('message-header')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

