import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export class Content extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('content')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}