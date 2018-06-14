import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export interface TagProps extends ControlElementProps{
	text: string
}

export class Tag extends ControlElement<TagProps>{
	public render() {
		const className = this.classNames('tag')
		
		return (
			<span className={className}>
				{this.props.text}
				{this.props.children}
			</span>
		)
	}
}