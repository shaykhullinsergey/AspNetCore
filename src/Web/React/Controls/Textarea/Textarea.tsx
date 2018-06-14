import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export interface TextareaProps extends ControlElementProps {
	placeholder?: string
}

export class Textarea extends ControlElement<TextareaProps> {
	public render() {
		const className = this.classNames('textarea')

		return (
			<textarea className={className} placeholder={this.props.placeholder}/>
		)
	}
}