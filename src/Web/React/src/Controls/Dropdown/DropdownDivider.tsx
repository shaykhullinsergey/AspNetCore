import * as React from 'react'
import { Element, TextElementProps } from 'Controls'

export class DropdownDivider extends Element<TextElementProps> {

	public render() {
		const className = this.classNames('dropdown-divider')

		return (
			<hr className={className}/>
		)
	}
}