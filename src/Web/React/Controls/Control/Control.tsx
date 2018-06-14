import {ControlElement, ControlElementProps} from "../ControlMode"
import * as React from "react"

export enum ControlIcon {
	Left = 'has-icons-left',
	Right = 'has-icons-right',
	Both = 'has-icons-left has-icons-right'
}

export interface ControlProps extends ControlElementProps {
	icons?: ControlIcon
}

export class Control extends ControlElement<ControlProps> {
	public render() {
		const className = this.classNames('control', this.props.icons)
		
		return(
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}