import * as React from "react"
import {Element, ElementProps} from 'controls'

export class MediaLeft extends Element<ElementProps> {
	public render() {
		const className = this.classNames('media-left')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}