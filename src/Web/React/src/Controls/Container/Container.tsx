import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class Container extends Element<ElementProps>{
	public render() {
		const className = this.classNames('container')
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}