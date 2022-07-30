import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.aboutsection}>
          <div className={styles.innercontainer}>
            <h1>About Us</h1>
            <p className={styles.text}>
              Agriculture is becoming digital, This web application can provide
              farmers with <br />
              valuable information that can help them improve their planting,
              cultivating, and <br /> harvesting. This app may include
              agricultural best practices, weather forecasts,
              <br /> and data on disease epidemics. This Web Application can
              also help the Farmers <br />
              to clear their Queries with the other farmers this helps farmers
              get more from the <br /> land while using resources more
              sustainably.
            </p>
            <div className={styles.skills}></div>
          </div>
        </div>{' '}
      </div>
    </div>
  )
}

export default About
