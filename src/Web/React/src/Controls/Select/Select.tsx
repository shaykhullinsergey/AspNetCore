import * as React from 'react'
import {Element, ElementProps} from 'Controls'

export class Select extends Element<ElementProps> {
	public render() {
		const className = this.classNames('select')

		return (
			<span className={className}>
				<select>
					{this.props.children}
				</select>
			</span>
		)
	}
}

