import * as React from 'react'

export class LevelItem extends React.Component{
	public render() {
		return (
			<div className={"level-item"}>
				{this.props.children}
			</div>
		)
	}
}