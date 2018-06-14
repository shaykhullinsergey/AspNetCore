import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'

export interface DeleteProps extends ControlElementProps {
	onClick(): void
}

export class Delete extends ControlElement<DeleteProps> {

	public render() {
		const className = this.classNames('delete')

		return (
			<button className={className}/>
		)
	}
}