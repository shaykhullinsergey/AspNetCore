import * as React from "react"
import { Element, TextElementProps } from 'Controls'

export interface RadioProps extends TextElementProps{
	name: string
}

export class Radio extends Element<RadioProps>{
	public render() {
		const className = this.classNames('radio')

		return(
			<label className={className}>
				<input type={'radio'} name={this.props.name}/>
				{this.props.text}
			</label>
		)
	}
}