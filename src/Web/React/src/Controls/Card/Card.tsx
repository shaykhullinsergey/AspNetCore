import * as React from 'react'
import { ControlElement, ControlElementProps } from '../ControlElement'

export class Card extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('card')
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

