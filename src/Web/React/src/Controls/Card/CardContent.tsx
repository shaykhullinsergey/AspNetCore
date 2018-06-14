import * as React from 'react'
import { ControlElement, ControlElementProps } from '../ControlElement'

export class CardContent extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('card-content')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}