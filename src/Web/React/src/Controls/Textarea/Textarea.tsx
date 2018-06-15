import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export interface TextareaProps extends ElementProps {
	placeholder?: string
}

export class Textarea extends Element<TextareaProps> {
	public render() {
		const className = this.classNames('textarea')

		return (
			<textarea className={className} placeholder={this.props.placeholder}/>
		)
	}
}