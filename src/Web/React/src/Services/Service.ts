import axios from 'axios'

export class Service {
	protected get<TResponse>(url: string): Promise<TResponse> {
		return axios.get(url)
			.then(x => x.data)
	}
	
	protected post<TMessage, TResponse = any>(url: string, message: TMessage): Promise<TResponse> {
		return axios.post(url, message)
			.then(x => x.data)
	}
}