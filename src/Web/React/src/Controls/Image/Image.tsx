import * as React from "react"
import {Element, ElementProps} from "../Element"

export enum ImageSize {
	x64 = 'is-64x64'
}

export interface ImageProps extends ElementProps{
	src: string
	imageSize: ImageSize
}

export class Image extends Element<ImageProps> {
	public render() {
		const className = this.classNames('image', this.props.imageSize)
		
		return (
			<p className={className}>
				<img src={this.props.src} />
			</p>
		)
	}
}