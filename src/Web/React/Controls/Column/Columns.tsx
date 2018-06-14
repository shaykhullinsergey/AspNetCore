import * as React from "react"
import {ControlElement as Control, ControlElementProps as ControlProps} from 'Controls'

export class Columns extends Control<ControlProps> {
	public render() {
		
		const className = this.classNames("columns")
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}