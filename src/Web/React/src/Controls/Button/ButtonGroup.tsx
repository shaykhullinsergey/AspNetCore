import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class ButtonGroup extends Element<ElementProps> {

	public render() {
		const className = this.classNames('buttons')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}