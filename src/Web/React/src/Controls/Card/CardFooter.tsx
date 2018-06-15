import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class CardFooter extends Element<ElementProps> {

	public render() {
		const className = this.classNames('card-footer')

		return (
			<footer className={className}>
				{this.props.children}
			</footer>
		)
	}
}