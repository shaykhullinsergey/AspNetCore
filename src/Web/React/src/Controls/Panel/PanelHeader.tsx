import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export interface PanelHeaderProps extends ControlElementProps {
	text?: string
}

export class PanelHeader extends ControlElement<PanelHeaderProps> {
	public render() {
		const className = this.classNames('panel-heading')

		return (
			<p className={className}>
				{this.props.text}
			</p>
		)
	}
}