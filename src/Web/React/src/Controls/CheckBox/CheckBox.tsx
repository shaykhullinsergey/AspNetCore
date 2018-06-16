import * as React from "react"

import { Label } from 'controls/Label'
import { Element, TextElementProps, ClickElementProps } from 'controls'

export enum CheckBoxType {
	Circle = 'is-circle',
	Block = 'is-block'
}

export interface CheckBoxProps extends TextElementProps, ClickElementProps {
	name: string
	checked?: boolean
	checkBoxType?: CheckBoxType
}

export class CheckBox extends Element<CheckBoxProps> {
	public render() {
		const className = this.classNames('is-checkradio', this.props.checkBoxType)
		
		return (
			<React.Fragment>
				<input className={className}
					type={'checkbox'}
					id={this.props.name}
					checked={this.props.checked}/>
				<Label text={this.props.text} 
					for={this.props.name}
					onClick={() => this.props.onClick()}/>
			</React.Fragment>
		)
	}
}