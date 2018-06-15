import * as React from "react"
import {Element, TextElementProps} from "Controls"

export class SelectItem extends Element<TextElementProps> {
	public render() {
		const className = this.classNames()

		return (
			<option className={className}>
				{this.props.text}
			</option>
		)
	}
}