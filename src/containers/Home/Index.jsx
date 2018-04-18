import React, { Component } from 'react'
import styles from './styles.sss'

class Home extends Component {
	render() {
		return (
			<div className={styles.home}>
				<div className={styles.frame}>
					<div className={styles.logo}>Liveasy</div>
				</div>
			</div>
		)
	}
}

export default Home
