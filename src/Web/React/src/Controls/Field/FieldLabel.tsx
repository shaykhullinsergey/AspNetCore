import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'


export class FieldLabel extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('field-label')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}