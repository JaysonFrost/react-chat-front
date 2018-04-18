import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.sss'

export default class Chat extends Component {
	componentDidUpdate() {
		this.scrollToBottom()
	}

	componentDidMount() {
		this.scrollToBottom()
	}

	// scrollToBottom = () => {
	// 	this.chat.scrollTo(0, this.chat.scrollHeight)
	// }

	newMessage(e) {
		e.preventDefault()

		// const text = ReactDOM.findDOMNode(this.textInput).value.trim()
		ReactDOM.findDOMNode(this.textInput).value = ''
		this.scrollToBottom()
	}

	render() {
		const {
			messages
		} = this.props

		return (
			<div className={styles.chat}>
				<div className={styles.title}>Chat with FRIENDNAME</div>
				<div className={styles.messages} ref={(chat) => { this.chat = chat }}>
					<ul>
						{!!messages.length && messages.map((mes) => {
							const isCurrentUser = <span className={styles.you}>You</span>//TODO
							return (
								<li key={mes._id}>
									<div className={styles.message}>
										<span>{mes.username}</span>
										{isCurrentUser}
										<div>{mes.text}</div>
									</div>
								</li>
							)
						}
						)}
					</ul>
				</div>
				<form onSubmit={this.newMessage.bind(this)} >
					<input
						ref={(e) => { this.textInput = e }}
						type="text"
						placeholder={'Write a message...'}
					/>
					<div className={styles.arrow} onClick={this.newMessage.bind(this)}></div>
				</form>
			</div>
		)
	}
}
