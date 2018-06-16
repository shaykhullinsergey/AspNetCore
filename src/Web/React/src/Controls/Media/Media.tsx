import * as React from "react"
import {Element, ElementProps} from 'controls'

export class Media extends Element<ElementProps>{
	public render() {
		const className = this.classNames('media')

		return(
			<article className={className}>
				{this.props.children}
			</article>
		)
	}
}

