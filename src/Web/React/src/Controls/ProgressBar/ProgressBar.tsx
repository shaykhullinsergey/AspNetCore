import * as React from "react"
import {Element, ElementProps} from "../Element"

export interface ProgressBarProps extends ElementProps {
	max: number
	value: number
}

export class ProgressBar extends Element<ProgressBarProps>{
	
	public render() {
		const className = this.classNames('progress')
		
		return (
			<progress className={className}
				value={this.props.value}
				max={this.props.max}>
			</progress>
		)
	}
}