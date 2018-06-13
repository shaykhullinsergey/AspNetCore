import * as React from 'react'
import * as classNames from 'classnames'

export enum FieldLabelSize {
	Small = 'is-small',
	Normal = 'is-normal',
	Medium = 'is-normal',
	Large = 'is-large'
}

export interface FieldLabelProps {
	size?: FieldLabelSize
}

export class FieldLabel extends React.Component<FieldLabelProps> {
	
	public render() {
		const className = classNames(
			'field-label',
			this.props.size
		)
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}