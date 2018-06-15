import * as React from "react"
import { Element, ElementProps } from 'Controls'

export class Footer extends Element<ElementProps> {
	
	public render() {
		const className = this.classNames('footer')
		
		return (
			<footer className={className}>
				{this.props.children}
			</footer>
		)
	}
}