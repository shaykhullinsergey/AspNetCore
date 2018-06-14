import {ControlElement, ControlElementProps} from "../ControlMode"

export class PanelTab extends ControlElement<ControlElementProps> {
	public render() {
		const className = this.classNames()

		return (
			<a className={className}>
				{this.props.children}
			</a>
		)
	}
}

export class PanelIcon extends ControlElement<ControlElementProps> {
	public render() {
		const className = this.classNames('panel-icon')

		return (
			<span className={className}>
				{this.props.children}
			</span>
		)
	}
}