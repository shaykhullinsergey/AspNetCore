import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class LevelLeft extends Element<ElementProps> {

	public render() {
		const className = this.classNames('level-left')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}