import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class PanelBlock extends Element<ElementProps> {
	public render() {
		const className = this.classNames('panel-block')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}