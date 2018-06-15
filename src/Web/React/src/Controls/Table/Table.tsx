import {Element, ElementProps} from "../Element"
import * as React from "react"

export class Table extends Element<ElementProps> {
	
	public render() {
		const className = this.classNames('table')
		
		return (
			<table className={className}>
				{this.props.children}
			</table>
		)
	}
}

