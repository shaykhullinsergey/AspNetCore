import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class Tabs extends ControlElement<ControlElementProps> {
	public render() {
		const className = this.classNames('tabs')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}