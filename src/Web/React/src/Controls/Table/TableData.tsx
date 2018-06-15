import * as React from "react"
import {Element, ElementProps} from "../Element"

export class TableData extends Element<ElementProps> {

	public render() {
		const className = this.classNames()

		return (
			<td className={className}>
				{this.props.children}
			</td>
		)
	}
}