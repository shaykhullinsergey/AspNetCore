import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './configure-bulma'
import './configure-services'
import './configure-routes'

import { MessagePage } from "pages/Message"

ReactDOM.render(
	<MessagePage/>,
	document.getElementById('react'))
