import * as React from "react"
import {Element, ElementProps} from "Controls"

export class HeroFooter extends Element<ElementProps> {
	public render() {
		const className = this.classNames('hero-foot')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}