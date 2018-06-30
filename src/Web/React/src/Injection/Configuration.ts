import { ServiceType } from "injection"

export interface Configuration {
	register<TService>(type: ServiceType<TService>, service: TService): void
	create(): Container
}

export interface Container {
	get<TService>(type: ServiceType<TService>): TService
}

class ConfigurationClass {
	private services: {[key: string]: any} = {}
	
	public register<TService>(type: ServiceType<TService>, service: TService): void {
		this.services[type.name] = service
	}
	
	public create(): Container {
		return new ContainerClass(this.services)
	}
}

class ContainerClass {
	private readonly services: {[key: string]: any} = {}

	constructor(services: {[p: string]: any}) {
		this.services = services
	}
	
	public get<TService>(type: ServiceType<TService>): TService {
		return this.services[type.name]
	}
}

export const config: Configuration = new ConfigurationClass()