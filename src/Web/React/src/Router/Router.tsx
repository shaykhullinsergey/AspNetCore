import * as React from "react"
import {Switch, Route} from "react-router-dom"
import {Page} from "pages"

export class Router extends React.Component {
	private static routes: any[]
	
	public register<TPage extends Page>(url: string, page: TPage): void {
		Router.routes.push(
			<Route key={url} exact path={url} render={() => (
				<React.Fragment>
					{page.render()}
				</React.Fragment>
			)}/>
		)
	}
	
	public render() {
		return (
			<React.Fragment>
				<Switch>
					{Router.routes}
				</Switch>
			</React.Fragment>
		)
	}
}

export const router: Router = new Router({})