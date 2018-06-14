import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class LevelItem extends ControlElement<ControlElementProps> {
	public render() {
		return (
			<p className={'level-item'}>
				{this.props.children}
			</p>
		)
	}
}