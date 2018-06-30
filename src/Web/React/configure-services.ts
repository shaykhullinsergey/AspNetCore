import { config } from "injection"
import { MessageType, MessageService } from "services/Message"

config.register(MessageType, MessageService)
