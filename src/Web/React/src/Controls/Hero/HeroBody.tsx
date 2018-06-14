import * as React from 'react'
import { ControlElement, ControlElementProps } from '../ControlElement'

export class HeroBody extends ControlElement<ControlElementProps> {
	public render() {
		const className = this.classNames('hero-body')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}