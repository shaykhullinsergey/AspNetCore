import * as React from 'react'
import {ControlElement as Control, ControlElementProps as ControlProps} from 'Controls'

export class LevelItem extends Control<ControlProps> {
	public render() {
		return (
			<div className={"level-item"}>
				{this.props.children}
			</div>
		)
	}
}