import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export interface PanelHeaderProps extends ElementProps {
	text?: string
}

export class PanelHeader extends Element<PanelHeaderProps> {
	public render() {
		const className = this.classNames('panel-heading')

		return (
			<p className={className}>
				{this.props.text}
			</p>
		)
	}
}