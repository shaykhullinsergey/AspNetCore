import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class LevelItem extends ControlElement<ControlElementProps> {
	public render() {
		return (
			<div className={'level-item'}>
				{this.props.children}
			</div>
		)
	}
}