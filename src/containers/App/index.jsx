import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import Chat from 'components/Chat'
import UserList from 'components/UserList'
import styles from './styles.sss'

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route render={() => (
						<div className={styles.home}>
							<UserList />
							<Route path={'/chat/:id'} render={() => (
								<Chat />
							)} />
						</div>
					)} />
				</Switch>
			</Router>
		)
	}
}

