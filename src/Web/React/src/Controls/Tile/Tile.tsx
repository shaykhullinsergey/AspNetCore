import * as React from 'react'
import {Element, ElementProps} from 'Controls'

export enum TileType {
	Parent = 'is-parent',
	Child = 'is-child'
}

export interface TileProps extends ElementProps {
	tileType?: TileType
}

export class Tile extends Element<TileProps>{
	public render() {
		const className = this.classNames('tile', this.props.tileType)

		return(
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}