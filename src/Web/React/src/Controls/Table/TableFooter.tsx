import * as React from "react"
import {Element, ElementProps} from "../Element"

export class TableFooter extends Element<ElementProps> {

	public render() {
		const className = this.classNames()

		return (
			<tfoot className={className}>
				{this.props.children}
			</tfoot>
		)
	}
}