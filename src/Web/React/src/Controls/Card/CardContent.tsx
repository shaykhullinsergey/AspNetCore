import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class CardContent extends Element<ElementProps> {

	public render() {
		const className = this.classNames('card-content')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}