import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class Message extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('message')

		return (
			<article className={className}>
				{this.props.children}
			</article>
		)
	}
}

