import * as React from 'react'
import { ClickElementProps, Element, TextElementProps } from 'controls'

export enum LabelType {
	Label = 'label',
	Radio = 'radio',
	Checkbox = 'checkbox'
}

export interface LabelProps extends TextElementProps, ClickElementProps {
	labelType?: LabelType
	for?: string
}

export class Label extends Element<LabelProps> {

	public render() {
		const className = this.classNames(this.props.labelType || LabelType.Label)

		return (
			<label className={className}
				htmlFor={this.props.for}
				onClick={() => this.props.onClick && this.props.onClick()}>
				{this.props.children}
				{this.props.text}
			</label>
		)
	}
}