import * as React from 'react'
import {Element, TextElementProps} from 'Controls'

export class Subtitle extends Element<TextElementProps>{
	public render() {
		const className = this.classNames('subtitle')

		return (
			<p className={className}>{this.props.text}</p>
		)
	}
}