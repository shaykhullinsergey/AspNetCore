import * as React from "react"
import * as classNames from 'classnames'

export enum ControlHelpers {
	Clearfix = 'is-clearfix',
	PulledLeft = 'is-pulled-left',
	PulledRight = 'is-pulled-right',
	MarginLess = 'is-marginless',
	PaddingLess = 'is-paddingless',
	Overlay = 'is-overlay',
	Clipped = 'is-clipped',
	Radiusless = 'is-raduisless',
	Shadowless = 'is-shadowless',
	Unselectable = 'is-unselectable',
	Invisible = 'is-invisible'
}

export enum ControlPlatform {
	Mobile = 'is-mobile',
	Desktop = 'is-desktop',
	Fullwidth = 'is-fullwidth'
}

export enum ControlMode {
	Normal = 'is-normal',
	Addons = 'has-addons',
	Grouped = 'is-grouped',
	Horizontal = 'is-horizontal',
	Expanded = 'is-expanded'
}

export enum ControlPosition {
	Left = '',
	Center = 'is-centered',
	Right = 'is-right'
}

export enum ControlType {
	White = 'is-white',
	Light = 'is-light',
	Dark = 'is-dark',
	Black = 'is-black',
	Text = 'is-text',
	Primary = 'is-primary',
	Link = 'is-link',
	Info = 'is-info',
	Success = 'is-success',
	Warning = 'is-warning',
	Danger = 'is-danger'
}

export enum ControlStyle {
	Outlined = 'is-outlined',
	Inverted = 'is-inverted',
	Rounded = 'is-rounded',
	Toggle = 'is-toggle',
	RoundedToggle = 'is-toggle-rounded',
	Boxed = 'is-boxed'
}

export enum ControlState {
	Normal = 'is-normal',
	Selected = 'is-selected',
	Novered = 'is-hovered',
	Focused = 'is-focused',
	Active = 'is-active',
	Loading = 'is-loading',
	Disabled = 'is-disabled',
	Static = 'is-static'
}

export enum ControlSize {
	Small = 'is-small',
	Normal = '',
	Medium = 'is-medium',
	Large = 'is-large',
}

export enum ControlColumns {
	One = 'is-1',
	Two = 'is-2',
	Three = 'is-3',
	Four = 'is-4',
	Five = 'is-5',
	Six = 'is-6',
	Seven = 'is-7',
	Eight = 'is-8',
	Nine = 'is-9',
	Ten = 'is-10',
	Eleven = 'is-11',
	Twelve = 'is-12'
}

export enum ControlOffset {
	One = 'is-offset-1',
	Two = 'is-offset-2',
	Three = 'is-offset-3',
	Four = 'is-offset-4',
	Five = 'is-offset-5',
	Six = 'is-offset-6',
	Seven = 'is-offset-7',
	Eight = 'is-offset-8',
	Nine = 'is-offset-9',
	Ten = 'is-offset-10',
	Eleven = 'is-offset-11',
	Twelve = 'is-offset-12'
}

export interface ControlElementProps {
	type?: ControlType
	mode?: ControlMode
	style?: ControlStyle
	state?: ControlState
	size?: ControlSize
	columns?: ControlColumns
	offset?: ControlOffset
	position?: ControlPosition
	platform?: ControlPlatform
	helpers?: ControlHelpers
	readonly?: boolean
}

export class ControlElement<TProps extends ControlElementProps> extends React.Component<TProps> {
	protected classNames(...classes: string[]) {
		return classNames(
			this.props.type,
			this.props.style,
			this.props.state,
			this.props.size,
			this.props.columns,
			this.props.offset,
			this.props.platform,
			this.props.helpers,
			classes
		)
	}
}