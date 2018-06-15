import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class CardFooterItem extends Element<ElementProps> {

	public render() {
		const className = this.classNames('card-footer-item')

		return (
			<p className={className}>
				{this.props.children}
			</p>
		)
	}
}