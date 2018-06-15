import * as React from 'react'
import { Element, ElementProps, TextElementProps } from '..'

export class Navbar extends Element<ElementProps> {
	public render() {
		const className = this.classNames('navbar')

		return (
			<nav className={className}>
				{this.props.children}
			</nav>
		)
	}
}

export class NavbarBrand extends Element<ElementProps> {
	public render() {
		const className = this.classNames('navbar-brand')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export class NavbarItem extends Element<TextElementProps> {
	public render() {
		const className = this.classNames('navbar-item')

		return (
			<a className={className}>
				{this.props.text}
				{this.props.children}
			</a>
		)
	}
}

export interface NavbarLinkProps extends TextElementProps {
	href?: string
}

export class NavbarLink extends Element<NavbarLinkProps> {
	public render() {
		const className = this.classNames('navbar-link')

		return (
			<a className={className} href={this.props.href}>
				{this.props.text}
				{this.props.children}
			</a>
		)
	}
}

export class NavbarBurger extends Element<ElementProps> {
	public render() {
		const className = this.classNames('navbar-burger')

		return (
			<a className={className}>
				<span></span>
				<span></span>
				<span></span>
			</a>
		)
	}
}

export class NavbarMenu extends Element<ElementProps> {
	public render() {
		const className = this.classNames('navbar-menu')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export class NavbarStart extends Element<ElementProps> {
	public render() {
		const className = this.classNames('navbar-start')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export class NavbarEnd extends Element<ElementProps> {
	public render() {
		const className = this.classNames('navbar-end')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export class NavbarDropdown extends Element<ElementProps> {
	public render() {
		const className = this.classNames('navbar-dropdown')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export class NavbarDivider extends Element<ElementProps> {
	public render() {
		const className = this.classNames('navbar-divider')

		return (
			<hr className={className}/>
		)
	}
}