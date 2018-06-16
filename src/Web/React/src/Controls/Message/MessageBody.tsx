import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class MessageBody extends Element<ElementProps> {

	public render() {
		const className = this.classNames('message-body')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}