import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class FieldLabel extends Element<ElementProps> {

	public render() {
		const className = this.classNames('field-label')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}