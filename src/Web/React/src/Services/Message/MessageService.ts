import { Service } from "services"
import { ServiceType } from "injection"
import { MessageViewModel, MessagesViewModel } from 'components/Message'

export interface MessageService {
	getAllMessages(): Promise<MessagesViewModel>;
	addMessage(message: MessageViewModel): Promise<MessageViewModel>;
}

class MessageServiceClass extends Service implements MessageService {

	public getAllMessages(): Promise<MessagesViewModel> {
		return this.get<MessagesViewModel>('/messages')
	}

	public addMessage(message: MessageViewModel): Promise<MessageViewModel> {
		return this.post<MessageViewModel, MessageViewModel>('/messages/add', message)
	}
}

export const MessageType: ServiceType<MessageService> = new ServiceType<MessageService>('MessageServiced')
export const MessageService: MessageService = new MessageServiceClass()
