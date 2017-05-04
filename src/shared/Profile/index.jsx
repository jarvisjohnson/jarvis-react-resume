import React, { Component } from 'react'

import * as styles from './styles.css'
import resume from 'shared/content/resume'

const getLocationString = ({city, region, postalCode}) =>
	`${city}, ${region} ${postalCode}`

const separator = String.fromCharCode(8226)
const Profile = ({name, label, email, phone, website, summary, location}) =>
	<div className={styles.profile}>
		<h1>{name}</h1>
		<p className={styles.contact}>
			{[
				phone,
				getLocationString(location),
				email
			].join(` ${separator} `)}
		</p>
	</div>

export default () => <Profile {...resume.basics} />