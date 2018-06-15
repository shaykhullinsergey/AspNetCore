import * as React from 'react'
import { Element, ElementProps } from '..'
import { TextElementProps } from '../Element'

export class Modal extends Element<ElementProps> {
	public render() {
		const className = this.classNames('modal')

		return (
			<div className={className}>
				<div className={'modal-background'}/>
				{this.props.children}
			</div>
		)
	}
}

export class ModalContent extends Element<ElementProps> {
	public render() {
		const className = this.classNames('modal-content')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export class ModalClose extends Element<ElementProps> {
	public render() {
		const className = this.classNames('modal-close')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export class ModalCard extends Element<ElementProps> {
	public render() {
		const className = this.classNames('modal-card')

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}
}

export class ModalCardHeader extends Element<ElementProps> {
	public render() {
		const className = this.classNames('modal-card-head')

		return (
			<header className={className}>
				{this.props.children}
			</header>
		)
	}
}

export class ModalCardTitle extends Element<TextElementProps> {
	public render() {
		const className = this.classNames('modal-card-title')

		return (
			<p className={className}>
				{this.props.text}
				{this.props.children}
			</p>
		)
	}
}

export class ModalCardBody extends Element<ElementProps> {
	public render() {
		const className = this.classNames('modal-card-body')

		return (
			<section className={className}>
				{this.props.children}
			</section>
		)
	}
}

export class ModalCardFooter extends Element<ElementProps> {
	public render() {
		const className = this.classNames('modal-card-foot')

		return (
			<section className={className}>
				{this.props.children}
			</section>
		)
	}
}