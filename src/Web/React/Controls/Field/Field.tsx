import * as React from 'react'
import {ControlElement as Control, ControlElementProps as ControlProps} from 'Controls'

export enum FieldPosition {
	AddonsCentered = 'has-addons-centered',
	AddonsRight = 'has-addons-right',
	GroupedCentered = 'is-grouped-centered',
	GroupedRight = 'is-grouped-right',
	GroupedMultiline = 'is-grouped-multiline'
}

export interface FieldProps extends ControlProps {
	fieldPosition?: FieldPosition
}

export class Field extends Control<FieldProps> {
	public render() {
		const className = this.classNames('field', this.props.fieldPosition)
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}