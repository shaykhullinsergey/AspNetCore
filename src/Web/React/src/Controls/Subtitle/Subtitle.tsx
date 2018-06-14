import * as React from 'react'
import {ControlElement, ControlElementProps} from 'Controls'

export interface SubtitleProps extends ControlElementProps {
	text: string
}

export class Subtitle extends ControlElement<SubtitleProps>{
	public render() {
		const className = this.classNames('subtitle')

		return (
			<p className={className}>{this.props.text}</p>
		)
	}
}