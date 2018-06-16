import * as React from 'react'
import { Element, TextElementProps } from 'controls'
import { Link } from 'controls/Link'


export class Breadcrumb extends Element<TextElementProps> {
	
	public render() {
		const className = this.classNames()
		
		return (
			<li className={className}>
				<Link text={this.props.text}/>
				{this.props.children}
			</li>
		)
	}
}


