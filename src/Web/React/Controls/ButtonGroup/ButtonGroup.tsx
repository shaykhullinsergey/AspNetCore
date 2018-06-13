import * as React from 'react'
import * as classNames from 'classnames'


export enum ButtonGroupType {
	Normal = '',
	Addons = 'has-addons'
}

export enum ButtonGroupPosition {
	Left = '',
	Center = 'is-centered',
	Right = 'is-right'
}

export interface ButtonGroupProps {
	type?: ButtonGroupType
	position?: ButtonGroupPosition
}

export class ButtonGroup extends React.Component<ButtonGroupProps> {
	
	public render() {
		const className = classNames(
			"buttons",
			this.props.type,
			this.props.position
		)
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}