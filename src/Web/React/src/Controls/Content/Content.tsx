import * as React from 'react'
import { Element, ElementProps } from 'controls'

export class Content extends Element<ElementProps> {

	public render() {
		const className = this.classNames('content')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}