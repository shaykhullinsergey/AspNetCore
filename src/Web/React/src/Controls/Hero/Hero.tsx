import * as React from 'react'
import { ControlElement, ControlElementProps } from '../ControlElement'

export class Hero extends ControlElement<ControlElementProps>{
	public render() {
		const className = this.classNames('hero')

		return(
			<section className={className}>
				{this.props.children}
			</section>
		)
	}
}

