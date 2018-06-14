import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class ButtonGroup extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('buttons')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}