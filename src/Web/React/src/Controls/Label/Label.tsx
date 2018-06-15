import * as React from 'react'
import { Element, TextElementProps } from 'Controls'

export enum LabelType {
	Label = 'label',
	Radio = 'radio',
	Checkbox = 'checkbox'
}

export interface LabelProps extends TextElementProps {
	labelType?: LabelType
}

export class Label extends Element<LabelProps> {

	public render() {
		const className = this.classNames(this.props.labelType || LabelType.Label)

		return (
			<label className={className}>
				{this.props.children}
				{this.props.text}
			</label>
		)
	}
}