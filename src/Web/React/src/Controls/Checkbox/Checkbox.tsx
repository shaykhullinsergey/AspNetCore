import * as React from "react"
import { Element, TextElementProps, ClickElementProps } from 'Controls'

export interface CheckboxProps extends TextElementProps, ClickElementProps {
	checked?: boolean
}

export class Checkbox extends Element<CheckboxProps> {
	public render() {
		const className = this.classNames('checkbox')
		
		return (
			<label className={className}>
				<input type={'checkbox'}
					onClick={() => this.props.onClick()}
					checked={this.props.checked}/>
				{this.props.text}
			</label>
		)
	}
}