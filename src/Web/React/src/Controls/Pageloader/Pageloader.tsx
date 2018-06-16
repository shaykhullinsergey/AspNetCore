import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class Pageloader extends Element<ElementProps> {
	
	public render() {
		const className = this.classNames('pageloader')
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}