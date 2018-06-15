import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class Icon extends Element<ElementProps>{
	public render() {
		const className = this.classNames('icon')
		
		return(
			<span className={className}>
				{this.props.children}
			</span>
		)
	}
	
}