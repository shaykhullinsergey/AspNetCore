import * as React from 'react'
import * as classNames from 'classnames'

export enum ContentSize {
	Small = 'is-small',
	Medium = 'is-medium',
	Large = 'is-large'
}

export interface ContentProps {
	size?: ContentSize
}

export class Content extends React.Component<ContentProps> {
	
	public render() {
		const className = classNames(
			"content",
			this.props.size
		)
		
		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}