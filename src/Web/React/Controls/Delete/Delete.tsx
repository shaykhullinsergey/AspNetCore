import * as React from 'react'
import {ControlElement as Control, ControlElementProps as ControlProps} from "Controls"

export interface DeleteProps extends ControlProps {
	onClick(): void
}

export class Delete extends Control<DeleteProps>{
	
	public render() {
		const className = this.classNames("delete")
		
		return (
			<button className={className} />
		)
	}
}