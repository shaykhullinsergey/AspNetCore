import * as React from "react"
import {ControlElement as Control, ControlElementProps as ControlProps} from 'Controls'

export interface SubtitleProps extends ControlProps {
	text: string
}

export class Subtitle extends Control<SubtitleProps>{
	public render() {
		const className = this.classNames('subtitle')

		return (
			<p className={className}>{this.props.text}</p>
		)
	}
}