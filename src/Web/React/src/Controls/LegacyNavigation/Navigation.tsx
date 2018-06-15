import * as React from 'react'
import { Element, ElementProps } from '../Element'

export class Navigation extends Element<ElementProps> {

	public render() {
		const className = this.classNames('nav')

		return (
			<nav className={className}>
				{this.props.children}
			</nav>
		)
	}
}

export class NavigationLeft extends Element<ElementProps> {

	public render() {
		const className = this.classNames('nav-left')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export class NavigationCenter extends Element<ElementProps> {

	public render() {
		const className = this.classNames('nav-center')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export class NavigationRight extends Element<ElementProps> {

	public render() {
		const className = this.classNames('nav-center')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}