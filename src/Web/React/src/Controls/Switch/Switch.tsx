import * as React from 'react'
import { Label } from 'controls/Label'
import { Element, TextElementProps, ClickElementProps } from 'controls'

export interface SwitchProps extends TextElementProps, ClickElementProps {
	name: string
	checked: boolean
}

export class Switch extends Element<SwitchProps> {
	
	public render() {
		const className = this.classNames('switch')
		
		return (
			<React.Fragment>
				<input className={className} 
					type={'checkbox'} 
					checked={this.props.checked}
					name={this.props.name}/>
				<Label text={this.props.text} 
					for={this.props.name}
					onClick={() => this.props.onClick && this.props.onClick()}/>
			</React.Fragment>
		)
	}
}