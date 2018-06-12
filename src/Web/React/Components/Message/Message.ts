export interface MessageProps {
	messages: Message[];
}

export interface MessageState {
	messages: Message[];
}

export interface Message {
	id: number;
	text: string;
}