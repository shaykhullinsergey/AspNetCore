import * as React from 'react'
import { Element, TextElementProps } from 'controls'

export class DropdownItem extends Element<TextElementProps> {

	public render() {
		const className = this.classNames('dropdown-item')

		return (
			<a className={className}>
				{this.props.text}
				{this.props.children}
			</a>
		)
	}
}