import {Page} from "pages"
import * as React from 'react'
import {MessageBlock, AddMessageBlock} from "components/Message"

export class MessagePage extends Page {
	
	public render() {
		return (
			<div>
				<MessageBlock/>
				<AddMessageBlock/>
			</div>
		)
	}
}