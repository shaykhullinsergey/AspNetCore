import * as React from 'react'
import {ControlElement as Control, ControlElementProps as ControlProps} from 'Controls'

export class Select extends Control<ControlProps> {
	public render() {
		const className = this.classNames('select')
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}