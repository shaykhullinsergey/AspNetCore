import * as React from 'react'
import { ControlElement, ControlElementProps } from '../ControlElement'

export class LevelRight extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('level-right')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}