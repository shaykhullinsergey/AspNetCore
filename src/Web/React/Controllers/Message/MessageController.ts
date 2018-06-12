import axios, {AxiosPromise} from 'axios'
import {MessageViewModel} from 'Controllers/Message';

export interface MessageController {
	getAll(): AxiosPromise<MessageViewModel>;
}

class MessageControllerClass implements MessageController {

	public getAll(): AxiosPromise<MessageViewModel> {
		return axios.get<MessageViewModel>('/messages')
	}
}

export const Controller: MessageController = new MessageControllerClass()