import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class LevelRight extends Element<ElementProps> {

	public render() {
		const className = this.classNames('level-right')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}