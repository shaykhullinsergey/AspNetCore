import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class Hero extends Element<ElementProps>{
	public render() {
		const className = this.classNames('hero')

		return(
			<section className={className}>
				{this.props.children}
			</section>
		)
	}
}

