import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class Block extends ControlElement<ControlElementProps> {
	public render() {
		const className = this.classNames('block')
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}