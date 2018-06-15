import * as React from 'react'
import { Element, ClickElementProps } from 'Controls'

export class Delete extends Element<ClickElementProps> {

	public render() {
		const className = this.classNames('delete')

		return (
			<button className={className}/>
		)
	}
}