import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export enum FieldPosition {
	AddonsCentered = 'has-addons-centered',
	AddonsRight = 'has-addons-right',
	GroupedCentered = 'is-grouped-centered',
	GroupedRight = 'is-grouped-right',
	GroupedMultiline = 'is-grouped-multiline'
}

export interface FieldProps extends ControlElementProps {
	fieldPosition?: FieldPosition
}

export class Field extends ControlElement<FieldProps> {
	public render() {
		const className = this.classNames('field', this.props.fieldPosition)

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}