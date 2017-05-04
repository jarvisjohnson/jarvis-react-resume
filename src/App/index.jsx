import React, { Component } from 'react'

import './fonts/index.css'
import * as styles from './styles.css'
import Details from 'shared/Details'

export default class Container extends Component {
  render() {
    return (
    	<div className={styles.app}>
				<div className={styles.left__column}>
          <Details />
        </div>
        <div className={styles.right__column}>
          {this.props.children}
        </div>
        <span className={styles.clearfix}></span>
			</div>
    )
  }
}