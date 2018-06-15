import {Element, TextElementProps} from "../Element"

export class Help extends Element<TextElementProps> {
	
	public render() {
		const className = this.classNames('help')
		
		return (
			<p className={className}>
				{this.props.text}
			</p>
		)
	}
}