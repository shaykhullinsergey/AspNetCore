import * as React from 'react'
import { Element, ElementProps } from 'controls'

export enum Icons {
	Left = 'has-icons-left',
	Right = 'has-icons-right',
	Both = 'has-icons-left has-icons-right'
}

export interface ControlProps extends ElementProps {
	icons?: Icons
}

export class Control extends Element<ControlProps> {
	public render() {
		const className = this.classNames('control', this.props.icons)

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}