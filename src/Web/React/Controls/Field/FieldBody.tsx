import * as React from 'react'
import {ControlElement as Control, ControlElementProps as ControlProps} from 'Controls'

export class FieldBody extends Control<ControlProps> {
	
	public render() {
		return (
			<div className={"field-body"}>
				{this.props.children}
			</div>
		)
	}
}