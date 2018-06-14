import * as React from 'react'
import {ControlElement as Control, ControlElementProps as ControlProps} from "Controls/ControlMode"

export interface ButtonProps extends ControlProps{
	label: string
	onClick(): void
}

export class Button extends Control<ButtonProps> {
	
	public render() {
		const className = this.classNames("button")
		
		return (
			<span
				className={className}
				onClick={() => this.props.onClick()}>
				{this.props.label}
			</span>
		)
	}
}