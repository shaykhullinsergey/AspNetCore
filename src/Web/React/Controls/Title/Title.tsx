import * as React from "react"
import {ControlElement as Control, ControlElementProps as ControlProps} from 'Controls'

export interface TitleProps extends ControlProps {
	text: string
}

export class Title extends Control<TitleProps>{
	public render() {
		const className = this.classNames('title')
		
		return (
			<p className={className}>{this.props.text}</p>
		)
	}
}