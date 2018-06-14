import * as React from "react"
import {ControlElement as Control, ControlElementProps as ControlProps} from 'Controls'

export interface TextareaProps extends ControlProps {
	placeholder?: string
}

export class Textarea extends Control<TextareaProps> {
	public render() {
		const className = this.classNames('textarea')
		
		return(
			<textarea className={className} placeholder={this.props.placeholder}/>
		)
	}
}