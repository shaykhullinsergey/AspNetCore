import * as React from 'react'
import * as classNames from 'classnames'

export enum FieldType {
	Normal = '',
	Addons = 'has-addons',
	Grouped = 'is-grouped',
	Horizontal = 'is-horizontal',
	Expanded = 'is-expanded'
}

export enum FieldPosition {
	AddonsCentered = 'has-addons-centered',
	AddonsRight = 'has-addons-right',
	GroupedCentered = 'is-grouped-centered',
	GroupedRight = 'is-grouped-right',
	GroupedMultiline = 'is-grouped-multiline'
}

export interface FieldProps {
	type?: FieldType,
	position?: FieldPosition
}

export class Field extends React.Component<FieldProps> {
	public render() {
		const className = classNames(
			'field',
			this.props.type,
			this.props.position
		)
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}