import * as React from 'react'
import * as classNames from 'classnames'

export enum Helpers {
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

export enum Platform {
	Mobile = 'is-mobile',
	Desktop = 'is-desktop',
	Fullwidth = 'is-fullwidth'
}

export enum Mode {
	Normal = 'is-normal',
	Addons = 'has-addons',
	Grouped = 'is-grouped',
	Horizontal = 'is-horizontal',
	Vertical = 'is-vertical',
	Expanded = 'is-expanded',
	Dropdown = 'has-dropdown',
	DropdownUp = 'has-dropdown has-dropdown-up',
	FixedTop = 'is-fixed-top',
	FixedBottom = 'is-fixed-bottom',
}

export enum Position {
	Normal = '',
	Left = 'is-left',
	Center = 'is-centered',
	Right = 'is-right',
	Up = 'is-up',
}

export enum Type {
	Normal = '',
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

export enum Style {
	Outlined = 'is-outlined',
	Inverted = 'is-inverted',
	Striped = 'is-striped',
	Bordered = 'is-bordered',
	Hoverable = 'is-hoverable',
	Narrow = 'is-narrow',
	Transparent = 'is-transparent',
	Rounded = 'is-rounded',
	Thin = 'is-thin',
	Toggle = 'is-toggle',
	RoundedToggle = 'is-toggle-rounded',
	Boxed = 'is-boxed'
}

export enum State {
	Normal = 'is-normal',
	Selected = 'is-selected',
	Hovered = 'is-hovered',
	Focused = 'is-focused',
	Active = 'is-active',
	Loading = 'is-loading',
	Disabled = 'is-disabled',
	Static = 'is-static',
	Current = 'is-current'
}

export enum Size {
	Small = 'is-small',
	Normal = '',
	Medium = 'is-medium',
	Large = 'is-large',
}

export enum Columnns {
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

export enum Offset {
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

export interface ElementProps {
	type?: Type
	mode?: Mode
	style?: Style
	state?: State
	size?: Size
	columns?: Columnns
	offset?: Offset
	position?: Position
	platform?: Platform
	helpers?: Helpers
	classNames?: string[]
	readonly?: boolean
}

export interface TextElementProps extends ElementProps {
	text?: string | JSX.Element
}

export interface ClickElementProps extends ElementProps {
	onClick?: () => void
}

export class Element<TProps extends ElementProps> extends React.Component<TProps> {
	protected classNames(...classes: string[]) {
		return classNames(
			classes,
			this.props.type,
			this.props.mode,
			this.props.style,
			this.props.state,
			this.props.size,
			this.props.columns,
			this.props.offset,
			this.props.position,
			this.props.platform,
			this.props.helpers,
			this.props.classNames
		)
	}
}