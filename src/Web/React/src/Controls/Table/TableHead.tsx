import * as React from "react"
import {Element, ElementProps} from "../Element"

export class TableHead extends Element<ElementProps> {

	public render() {
		const className = this.classNames()

		return (
			<th className={className}>
				{this.props.children}
			</th>
		)
	}
}