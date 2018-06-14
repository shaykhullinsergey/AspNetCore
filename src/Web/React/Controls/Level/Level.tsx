import * as React from 'react'
import { ControlElement, ControlElementProps } from 'Controls'


export enum LevelType {
	Normal = 'level',
	Left = 'level-left',
	Right = 'level-right'
}

export interface LevelProps extends ControlElementProps{
	levelType?: LevelType
}

export class Level extends ControlElement<LevelProps> {

	public render() {
		const className = this.classNames(this.props.levelType || LevelType.Normal)

		return (
			<nav className={className}>
				{this.props.children}
			</nav>
		)
	}
}