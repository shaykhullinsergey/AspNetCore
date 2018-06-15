import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class Columns extends Element<ElementProps> {
	public render() {

		const className = this.classNames('columns')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}