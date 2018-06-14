import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class FieldBody extends ControlElement<ControlElementProps> {

	public render() {
		return (
			<div className={'field-body'}>
				{this.props.children}
			</div>
		)
	}
}