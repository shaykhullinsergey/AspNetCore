import * as React from "react"
import {Element, ElementProps} from "../Element"

export class TableBody extends Element<ElementProps> {

	public render() {
		const className = this.classNames()

		return (
			<tbody className={className}>
			{this.props.children}
			</tbody>
		)
	}
}