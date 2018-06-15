import * as React from 'react'
import { Element, ElementProps } from '../Element'

export enum Separator {
	Arrow = 'has-arrow-separator',
	Bullet = 'has-bullet-separator',
	Dot = 'has-bullet-separator',
	Succeed = 'has-succeeds-separator'
}

export interface BreadcrumbsProps extends ElementProps{
	separator?: Separator
}

export class Breadcrumbs extends Element<BreadcrumbsProps> {

	public render() {
		const className = this.classNames('breadcrumb', this.props.separator)

		return (
			<nav className={className}>
				<ul>
					{this.props.children}
				</ul>
			</nav>
		)
	}
}