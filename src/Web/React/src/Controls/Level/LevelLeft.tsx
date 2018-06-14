import * as React from 'react'
import { ControlElement, ControlElementProps } from '../ControlElement'

export class LevelLeft extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('level-left')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}