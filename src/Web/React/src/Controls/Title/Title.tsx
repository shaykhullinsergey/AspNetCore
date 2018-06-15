import * as React from 'react'
import { Element, TextElementProps } from 'Controls'

export class Title extends Element<TextElementProps> {
	public render() {
		const className = this.classNames('title')

		return (
			<p className={className}>{this.props.text}</p>
		)
	}
}