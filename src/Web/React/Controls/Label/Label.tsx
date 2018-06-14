import * as React from 'react'
import {ControlElement as Control, ControlElementProps as ControlProps} from 'Controls'

export enum LabelType {
	Label = 'label',
	Radio = 'radio',
	Checkbox = 'checkbox'
}

export interface LabelProps extends ControlProps {
	text: string
	labelType?: LabelType
}

export class Label extends Control<LabelProps> {
	
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