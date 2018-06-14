import * as React from 'react'
import {ControlElementProps as ControlProps} from "Controls"

export class Box extends React.Component<ControlProps>{
	
	public render() {
		return (
			<div className={"box"}>
				{this.props.children}
			</div>
		)
	}
}