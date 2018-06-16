import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class Form extends Element<ElementProps> {
	public render() {
		const className = this.classNames()

		return (
			<form className={className}>
				{this.props.children}
			</form>
		)
	}
}