import * as React from 'react'
import { Element, ElementProps } from 'controls'

export enum FieldPosition {
	AddonsCentered = 'has-addons-centered',
	AddonsRight = 'has-addons-right',
	GroupedCentered = 'is-grouped-centered',
	GroupedRight = 'is-grouped-right',
	GroupedMultiline = 'is-grouped-multiline'
}

export interface FieldProps extends ElementProps {
	fieldPosition?: FieldPosition
}

export class Field extends Element<FieldProps> {
	public render() {
		const className = this.classNames('field', this.props.fieldPosition)

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}