import React, { Component } from 'react'

import * as styles from './styles.css'
import resume from 'shared/content/resume'
import myImage from '../../App/images/jarvis-johnson-profile.jpg'

const getLocationString = ({city, region, postalCode}) =>
	`${city}, ${region} ${postalCode}`

const Profile = ({name, label, email, phone, website, summary, location, picture}) =>
	<div className={styles.profile}>
		<img src={myImage} className={styles.profile_image}/>
		<h1>{name}</h1>
		<h3>{label}</h3>
		<ul className={styles.contact}>
			<li>
				{email}
			</li>
			<li>
				{phone}
			</li>
			<li>
				{getLocationString(location)}
			</li>
		</ul>
	</div>

export default () => <Profile {...resume.basics} />