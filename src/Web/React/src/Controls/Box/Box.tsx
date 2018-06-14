import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class Box extends ControlElement<ControlElementProps> {

	public render() {
		return (
			<div className={'box'}>
				{this.props.children}
			</div>
		)
	}
}