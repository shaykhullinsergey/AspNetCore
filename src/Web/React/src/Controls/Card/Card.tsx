import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class Card extends Element<ElementProps> {

	public render() {
		const className = this.classNames('card')
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

