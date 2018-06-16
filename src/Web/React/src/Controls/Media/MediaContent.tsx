import * as React from "react"
import {Element, ElementProps} from 'controls'

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