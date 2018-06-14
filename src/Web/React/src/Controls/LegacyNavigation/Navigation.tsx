import * as React from 'react'
import { ControlElement, ControlElementProps } from '../ControlElement'

export class Navigation extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('nav')

		return (
			<nav className={className}>
				{this.props.children}
			</nav>
		)
	}
}

export class NavigationLeft extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('nav-left')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export class NavigationCenter extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('nav-center')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export class NavigationRight extends ControlElement<ControlElementProps> {

	public render() {
		const className = this.classNames('nav-center')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}