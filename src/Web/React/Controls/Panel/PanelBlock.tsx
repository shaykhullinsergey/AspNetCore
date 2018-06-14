import * as React from "react"
import {ControlElement, ControlElementProps} from "../ControlMode"

export class PanelBlock extends ControlElement<ControlElementProps> {
	public render() {
		const className = this.classNames('panel-block')

		return(
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}