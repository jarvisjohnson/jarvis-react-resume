import React, { Component } from 'react'

import * as styles from './styles.css'
import resume from 'shared/content/resume'
import myImage from '../../App/images/jarvis-johnson-profile.jpg'

const makeList = (m, i) => <li key={i}>{m}</li>

const mapTo = SomeComponent => (props, i) => 
  <SomeComponent key={i} {...props} />

const Social = ({network, username, url}) =>
<div>
  <h3>{category}</h3>
  <ul className={styles.gridList}>
    {keywords.reduce((list, next, i, original) => {
      var halfway = Math.round(original.length / 2)

      if (i < halfway)
        list.push([next])
      else
        list[i - halfway].push(next)

      return list
    }, []).map((arr, i) =>
      <div key={i} className={styles.gridListColumn}>
        {arr.map(makeList)}
      </div>
    )}
  </ul>
</div>  

const getLocationString = ({city, region, postalCode}) =>
	`${city}, ${region} ${postalCode}`

const Profile = ({name, label, email, phone, website, summary, location, picture, socials}) =>
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
		{socials.map(mapTo(Social))}
	</div>

export default () => <Profile {...resume.basics} />