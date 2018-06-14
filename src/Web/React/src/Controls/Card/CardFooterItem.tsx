import * as React from 'react'
import { ControlElement, ControlElementProps } from '../ControlElement'

export class CardFooterItem extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('card-footer-item')

		return (
			<p className={className}>
				{this.props.children}
			</p>
		)
	}
}