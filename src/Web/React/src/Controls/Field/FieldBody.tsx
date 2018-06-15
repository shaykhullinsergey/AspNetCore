import * as React from 'react'
import { Element, ElementProps } from 'Controls'

export class FieldBody extends Element<ElementProps> {

	public render() {
		return (
			<div className={'field-body'}>
				{this.props.children}
			</div>
		)
	}
}