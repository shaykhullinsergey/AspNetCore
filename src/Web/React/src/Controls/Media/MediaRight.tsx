import * as React from "react"
import {Element, ElementProps} from 'Controls'

export class MediaRight extends Element<ElementProps> {
	public render() {
		const className = this.classNames('media-right')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}