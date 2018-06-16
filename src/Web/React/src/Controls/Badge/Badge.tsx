import * as React from 'react'
import { Element, TextElementProps } from 'controls'

export enum BadgeType {
	Normal = '',
	White = 'is-badge-white',
	Light = 'is-badge-light',
	Dark = 'is-badge-dark',
	Black = 'is-badge-black',
	Text = 'is-badge-text',
	Primary = 'is-badge-primary',
	Link = 'is-badge-link',
	Info = 'is-badge-info',
	Success = 'is-badge-success',
	Warning = 'is-badge-warning',
	Danger = 'is-badge-danger'
}

export enum BadgePosition {
	Normal = '',
	Left = 'is-badge-left',
	Bottom = 'is-badge-bottom',
	BottomLeft = 'is-badge-bottom-left'
}

export enum BadgeStyle {
	Normal ='',
	Outlined = 'is-badge-outlined'
}

export interface BadgeProps extends TextElementProps {
	data?: number | string
	badgeType?: BadgeType
	badgeStyle?: BadgeStyle
	badgePosition?: BadgePosition
}

export class Badge extends Element<BadgeProps> {
	
	public render() {
		const className = this.classNames(
			'button',
			'badge',
			this.props.badgeType,
			this.props.badgeStyle,
			this.props.badgePosition)
		
		return (
			<button className={className} 
				data-badge={this.props.data}>
				{this.props.text}
			</button>
		)
	}
}

export class SpanBadge extends Element<BadgeProps> {

	public render() {
		const className = this.classNames('badge', this.props.badgeType)

		return (
			<span className={className}
				data-badge={this.props.data}>
				{this.props.text}
			</span>
		)
	}
}