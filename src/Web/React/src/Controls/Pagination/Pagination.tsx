import * as React from 'react'
import { Element, ElementProps } from 'Controls'
import { TextElementProps } from '../Element'

export class Pagination extends Element<ElementProps> {
	public render() {
		const className = this.classNames('pagination')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export class PaginationPrevious extends Element<TextElementProps> {
	public render() {
		const className = this.classNames('pagination-previous')

		return (
			<a className={className}>
				{this.props.text}
				{this.props.children}
			</a>
		)
	}
}

export class PaginationNext extends Element<TextElementProps> {
	public render() {
		const className = this.classNames('pagination-next')

		return (
			<a className={className}>
				{this.props.text}
				{this.props.children}
			</a>
		)
	}
}

export class PaginationList extends Element<ElementProps> {
	public render() {
		const className = this.classNames('pagination-list')

		return (
			<ul className={className}>
				{this.props.children}
			</ul>
		)
	}
}

export class PaginationListItem extends Element<ElementProps> {
	public render() {
		const className = this.classNames()

		return (
			<li className={className}>
				{this.props.children}
			</li>
		)
	}
}

export class PaginationLink extends Element<TextElementProps> {
	public render() {
		const className = this.classNames('pagination-link')

		return (
			<a className={className}>
				{this.props.text}
			</a>
		)
	}
}

export class PaginationRange extends Element<TextElementProps> {
	public render() {
		const className = this.classNames('pagination-ellipsis')

		return (
			<span className={className}>
				{this.props.text}
			</span>
		)
	}
}