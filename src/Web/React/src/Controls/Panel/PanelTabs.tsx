import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class PanelTabs extends ControlElement<ControlElementProps> {
	public render() {
		const className = this.classNames('panel-tabs')

		return (
			<p className={className}>
				{this.props.children}
			</p>
		)
	}
}

