import * as React from 'react'
import { Element, TextElementProps } from 'controls'

export class Tag extends Element<TextElementProps>{
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