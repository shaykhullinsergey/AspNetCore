import * as React from 'react'
import { Element, TextElementProps } from 'Controls'

export class MenuLabel extends Element<TextElementProps> {
	public render() {
		const className = this.classNames('menu-label')

		return (
			<p className={className}>
				{this.props.text}
			</p>
		)
	}
}