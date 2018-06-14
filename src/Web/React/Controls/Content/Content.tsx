import * as React from 'react'
import {ControlElement as Control, ControlElementProps as ControlProps} from "Controls"

export class Content extends Control<ControlProps> {
	
	public render() {
		const className = this.classNames("content")
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}