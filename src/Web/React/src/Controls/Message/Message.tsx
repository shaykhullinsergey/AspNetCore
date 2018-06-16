import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class Message extends Element<ElementProps> {

	public render() {
		const className = this.classNames('message')

		return (
			<article className={className}>
				{this.props.children}
			</article>
		)
	}
}

