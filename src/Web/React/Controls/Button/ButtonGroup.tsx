import * as React from 'react'
import {ControlElement as Control, ControlElementProps as ControlProps} from "Controls/ControlMode"

export class ButtonGroup extends Control<ControlProps> {
	
	public render() {
		const className = this.classNames("buttons")
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}