import * as React from "react"
import {Element, ElementProps} from "../Element"

export class TableHeader extends Element<ElementProps> {

	public render() {
		const className = this.classNames()

		return (
			<thead className={className}>
			{this.props.children}
			</thead>
		)
	}
}