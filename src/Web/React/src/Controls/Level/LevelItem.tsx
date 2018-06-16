import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class LevelItem extends Element<ElementProps> {
	public render() {
		return (
			<p className={'level-item'}>
				{this.props.children}
			</p>
		)
	}
}