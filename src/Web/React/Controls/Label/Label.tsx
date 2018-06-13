import * as React from 'react'
import * as classNames from 'classnames'

export enum LabelType {
	Label = 'label',
	Radio = 'radio',
	Checkbox = 'checkbox'
}

export enum LabelSize {
	Small = 'is-small',
	Normal = 'is-normal',
	Medium = 'is-medium',
	Large = 'is-large'
}

export interface LabelProps {
	type?: LabelType
	size?: LabelSize
	text?: string
}

export class Label extends React.Component<LabelProps> {
	
	public render() {
		const className = classNames(
			this.props.type || LabelType.Label,
			this.props.size
		)
		
		return (
			<label className={className}>
				{this.props.children}
				{this.props.text}
			</label>
		)
	}
}