import * as React from 'react'
import {ControlElement as Control, ControlElementProps as ControlProps} from 'Controls'

export enum ColumnNarrow {
	Narrow = 'is-narrow',
	Mobile = 'is-narrow-mobile',
	Tablet = 'is-narrow-tablet',
	Touch = 'is-narrow-touch',
	Desktop = 'is-narrow-desktop',
	Widescreen = 'is-narrow-widescreen',
	FullHd = 'is-narrow-fullhd'
}

export interface ColumnProps extends ControlProps {
	narrow?: ColumnNarrow
}

export class Column extends Control<ColumnProps> {
	public render() {
		const className = this.classNames("column", this.props.narrow)

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}