import * as React from 'react'
import {ControlElement as Control, ControlElementProps as ControlProps} from 'Controls'


export class FieldLabel extends Control<ControlProps> {
	
	public render() {
		const className = this.classNames('field-label')
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}