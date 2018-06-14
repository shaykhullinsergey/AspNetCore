import {ControlElement, ControlElementProps} from "../ControlMode"

export class Panel extends ControlElement<ControlElementProps> {
	public render() {
		const className = this.classNames('panel')
		
		return(
			<nav className={className}>
				{this.props.children}
			</nav>
		)
	}
}