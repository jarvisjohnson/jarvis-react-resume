import React, { Component } from 'react'

import * as styles from './styles.css'
import resume from 'shared/content/resume'
import Profile from 'shared/Profile'
import Skills from 'shared/Skills'
import Projects from 'shared/Projects'



export default class Container extends Component {
  render() {
    return (
      <div>
        <Profile />
        <div>
          <h2 className={styles.break}>Skills</h2>
          <Skills />
        </div>
        <div>
          <h2 className={styles.break}>Projects</h2>
          <Projects />
        </div>        
      </div>
    )
  }
}