import * as React from "react"
import { Element,ElementProps } from 'Controls'

export class Section extends Element<ElementProps>{
	public render() {
		const className = this.classNames('section')
		
		return(
			<section className={className}>
				{this.props.children}
			</section>
		)
	}
}