import * as React from 'react'
import { Element, ChangeElementProps } from 'controls'

export interface TextareaProps extends ChangeElementProps {
	placeholder?: string
}

export interface TextareaState {
	value?: string
}

export class Textarea extends Element<TextareaProps, TextareaState> {
	constructor(props: TextareaProps) {
		super(props)
		
		this.state = {value: null}
	}
	
	private onChange(value: string) {
		this.setState({value: value})
		this.props.onChange && this.props.onChange(value)
	}
	
	public render() {
		const className = this.classNames('textarea')

		return (
			<textarea className={className} 
				placeholder={this.props.placeholder}
				value={this.state.value}
				onChange={event => this.onChange(event.target.value)}/>
		)
	}
}