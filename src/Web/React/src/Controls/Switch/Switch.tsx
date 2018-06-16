import * as React from 'react'
import { ClickElementProps, Element, TextElementProps } from 'Controls'
import { Field } from 'Controls/Field'
import { Label } from 'Controls/Label'

export interface SwitchProps extends TextElementProps, ClickElementProps {
	name: string
	checked: boolean
}

export class Switch extends Element<SwitchProps> {
	
	public render() {
		const className = this.classNames('switch')
		
		return (
			<Field>
				<input className={className} 
					type={'checkbox'} 
					checked={this.props.checked}
					name={this.props.name}/>
				<Label text={this.props.text} 
					for={this.props.name}
					onClick={() => this.props.onClick && this.props.onClick()}/>
			</Field>
		)
	}
}