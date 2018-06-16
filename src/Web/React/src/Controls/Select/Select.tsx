import * as React from 'react'
import { Element, ChangeElementProps, TextElementProps } from 'controls'
import { SelectItem } from 'controls/Select/SelectItem'

export interface SelectProps extends TextElementProps, ChangeElementProps {
	
}

export interface SelectState {
	selected?: string
}

export class Select extends Element<SelectProps, SelectState> {
	
	constructor(props: SelectProps) {
		super(props)
		
		this.state = {selected: null}
	}
	
	private onChange(value: string) {
		this.setState({selected: value || null})
		this.props.onChange && this.props.onChange(value)
	}
	
	public render() {
		const className = this.classNames('select')

		return (
			<span className={className}>
				<select 
					onChange={event => this.onChange(event.target.value)}
					value={this.state.selected || ''}>
					<SelectItem text={this.props.text} value={''}/>
					{this.props.children}
				</select>
			</span>
		)
	}
}

