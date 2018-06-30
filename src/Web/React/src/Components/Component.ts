import * as React from "react"
import { config, Container } from "injection"

export class Component<TProps, TState = {}> extends React.Component<TProps, TState> {
	protected readonly services: Container

	constructor(props: TProps) {
		super(props)

		this.services = config.create()
	}
}