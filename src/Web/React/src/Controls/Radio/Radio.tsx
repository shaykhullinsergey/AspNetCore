import * as React from "react"

import { Label } from 'controls/Label'
import { Element, TextElementProps, ClickElementProps } from 'controls'

export interface RadioProps extends TextElementProps, ClickElementProps {
	id: string
	group: string
	checked?: boolean
}

export class Radio extends Element<RadioProps> {
	public render() {
		const className = this.classNames('is-checkradio')

		return (
			<React.Fragment>
				<input className={className}
					type={'radio'}
					id={this.props.id}
					name={this.props.group}
					checked={this.props.checked}/>
				<Label text={this.props.text}
					for={this.props.id}
					onClick={() => this.props.onClick && this.props.onClick()}/>
			</React.Fragment>
		)
	}
}