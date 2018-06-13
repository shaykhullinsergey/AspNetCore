import * as React from 'react'
import * as classNames from 'classnames'

export enum DeleteSize {
	Small = 'is-small',
	Medium = 'is-medium',
	Large = 'is-large'
}

export interface DeleteProps {
	size?: DeleteSize
	onClick(): void
}

export class Delete extends React.Component<DeleteProps>{
	
	public render() {
		const className = classNames(
			"delete",
			this.props.size
		)
		
		return (
			<button className={className} />
		)
	}
}