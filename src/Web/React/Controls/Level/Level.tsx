import * as React from 'react'
import * as classNames from 'classnames'

export enum LevelType {
	Normal = 'level',
	Left = 'level-left',
	Right = 'level-right'
}

export interface LevelProps {
	type?: LevelType
}

export class Level extends React.Component<LevelProps> {

	public render() {
		const className = classNames(
			this.props.type || 'level'
		)
		
		return (
			<nav className={className}>
				{this.props.children}
			</nav>
		)
	}
}