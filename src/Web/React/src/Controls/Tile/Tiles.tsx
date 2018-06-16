import * as React from "react"
import { Element,ElementProps } from 'controls'

export class Tiles extends Element<ElementProps>{
	public render() {
		const className = this.classNames('tile', 'is-ancestor')

		return(
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}