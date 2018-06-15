import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class Tabs extends Element<ElementProps> {
	public render() {
		const className = this.classNames('tabs')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}