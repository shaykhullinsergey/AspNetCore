import * as React from 'react'
import { ControlElement, ControlElementProps } from '../ControlElement'

export class CardFooter extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('card-footer')

		return (
			<footer className={className}>
				{this.props.children}
			</footer>
		)
	}
}