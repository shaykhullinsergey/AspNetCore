import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export enum LabelType {
	Label = 'label',
	Radio = 'radio',
	Checkbox = 'checkbox'
}

export interface LabelProps extends ControlElementProps {
	text: string
	labelType?: LabelType
}

export class Label extends ControlElement<LabelProps> {

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