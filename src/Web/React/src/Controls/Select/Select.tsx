import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class Select extends ControlElement<ControlElementProps> {
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