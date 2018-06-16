import * as React from 'react'
import { Element, TextElementProps } from 'Controls'

export enum TooltipType {
	Normal = '',
	White = 'is-tooltip-white',
	Light = 'is-tooltip-light',
	Dark = 'is-tooltip-dark',
	Black = 'is-tooltip-black',
	Text = 'is-tooltip-text',
	Primary = 'is-tooltip-primary',
	Link = 'is-tooltip-link',
	Info = 'is-tooltip-info',
	Success = 'is-tooltip-success',
	Warning = 'is-tooltip-warning',
	Danger = 'is-tooltip-danger'
}

export enum TooltipMode {
	Normal = '',
	Multiline = 'is-tooltip-multiline'
}

export enum TooltipPosition {
	Top = 'is-tooltip-top',
	Right = 'is-tooltip-right',
	Bottom = 'is-tooltip-bottom',
	Left = 'is-tooltip-left'
}

export interface TooltipProps extends TextElementProps {
	tooltip: string
	tooltipType?: TooltipType
	tooltipMode?: TooltipMode
	tooltipPosition?: TooltipPosition
}

export class Tooltip extends Element<TooltipProps> {
	
	public render() {
		const className = this.classNames(
			'button', 
			'tooltip',
			this.props.tooltipType,
			this.props.tooltipMode,
			this.props.tooltipPosition
		)
		
		return(
			<button className={className}
				data-tooltip={this.props.tooltip}>
				{this.props.text}
			</button>
		)
	}
}