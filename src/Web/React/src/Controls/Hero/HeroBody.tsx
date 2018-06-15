import * as React from 'react'
import {Element, ElementProps} from 'Controls'

export class HeroBody extends Element<ElementProps> {
	public render() {
		const className = this.classNames('hero-body')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

