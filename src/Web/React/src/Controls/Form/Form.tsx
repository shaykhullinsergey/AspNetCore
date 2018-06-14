import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class Form extends ControlElement<ControlElementProps> {
	public render() {
		const className = this.classNames()

		return (
			<form className={className}>
				{this.props.children}
			</form>
		)
	}
}