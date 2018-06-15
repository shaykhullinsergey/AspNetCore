import * as React from "react"
import {Element, ElementProps} from 'Controls'

export class MediaContent extends Element<ElementProps> {
	public render() {
		const className = this.classNames('media-content')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}