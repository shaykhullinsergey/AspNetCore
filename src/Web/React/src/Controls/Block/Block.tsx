import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class Block extends Element<ElementProps> {
	public render() {
		const className = this.classNames('block')
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}