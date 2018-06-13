import * as React from 'react'

export class FieldBody extends React.Component {
	
	public render() {
		return (
			<div className={"field-body"}>
				{this.props.children}
			</div>
		)
	}
}