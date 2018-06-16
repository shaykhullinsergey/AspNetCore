import * as React from "react"
import {Element, TextElementProps} from "controls"

export interface SelectItemProps extends TextElementProps {
	value?: string
}

export class SelectItem extends Element<SelectItemProps> {
	public render() {
		const className = this.classNames()

		return (
			<option className={className} value={this.props.value}>
				{this.props.text}
				{this.props.children}
			</option>
		)
	}
}