import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class PanelTab extends Element<ElementProps> {
	public render() {
		const className = this.classNames()

		return (
			<a className={className}>
				{this.props.children}
			</a>
		)
	}
}

export class PanelIcon extends Element<ElementProps> {
	public render() {
		const className = this.classNames('panel-icon')

		return (
			<span className={className}>
				{this.props.children}
			</span>
		)
	}
}