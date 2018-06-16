import * as React from 'react'
import { Element, ElementProps } from 'controls'

export enum ColumnNarrow {
	Narrow = 'is-narrow',
	Mobile = 'is-narrow-mobile',
	Tablet = 'is-narrow-tablet',
	Touch = 'is-narrow-touch',
	Desktop = 'is-narrow-desktop',
	Widescreen = 'is-narrow-widescreen',
	FullHd = 'is-narrow-fullhd'
}

export interface ColumnProps extends ElementProps {
	narrow?: ColumnNarrow
}

export class Column extends Element<ColumnProps> {
	public render() {
		const className = this.classNames('column', this.props.narrow)

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}