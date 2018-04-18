import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.sss'

export default class UserList extends Component {
	// changeUser = () => {
	// 	//TODO
	// }

	render() {
		return (
			<div className={styles.userList}>
				<Link to={'/'}>
					<div className={styles.chatTitle}>Chats</div>
				</Link>
				<div className={styles.list}>
					<ul>
						{<li onClick={() => this.changeUser()} key={4}>
							<Link to={'/chat'}>
								<div className={styles.userBlock}>
									<span>Username</span>
									<span className={styles.preview}>Preview</span>
									<span className={styles.time}>12:40</span>
								</div>
							</Link>
						</li>
						}
					</ul>
				</div>
				<Link to='/account'>
					<div className={styles.regButton}>
						<span>Account TODO</span>
					</div>
				</Link>
			</div>
		)
	}
}
