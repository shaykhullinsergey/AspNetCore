import axios, { AxiosPromise } from 'axios'
import { MessageViewModel, MessagesViewModel } from 'components/Message'

export interface MessageController {
	getAllMessages(): AxiosPromise<MessagesViewModel>;

	addMessage(message: MessageViewModel): AxiosPromise;
}

class MessageControllerClass implements MessageController {

	public getAllMessages(): AxiosPromise<MessagesViewModel> {
		return axios.get<MessagesViewModel>('/messages')
	}

	public addMessage(message: MessageViewModel): AxiosPromise {
		return axios.post('/messages/add', message)
	}
}

export const Controller: MessageController = new MessageControllerClass()