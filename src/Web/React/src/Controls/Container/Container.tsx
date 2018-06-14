import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class Container extends ControlElement<ControlElementProps>{
	public render() {
		const className = this.classNames('container')
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}