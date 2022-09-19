import React from 'react'
import styles from './index.module.css'
import Head from 'next/head'
import Type from './Type'

const HomePage = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>HortiPedia</title>
      </Head>
      <section className={styles.section}>
        <div className={styles.container}>
          <header className={styles.header}>
            <a color="" href="#" className={styles.logo}>
              HORTIPEDIA
            </a>
            <ul>
              <li>
                <a className={styles.active}>Home</a>
              </li>
              <li>
                <a href="http://localhost:3007">Weather</a>
              </li>
              <li>
                <a href="/Stats">Stats </a>
              </li>
              <li>
                <a href="/About">Understand Us </a>
              </li>
            </ul>
          </header>
          <div className={styles.content}>
            <h2>
              <font>WELCOME</font>
            </h2>
            <p>
              <Type />
            </p>
            <a href="/QA">Lets Dive On</a>
          </div>
          <div className={styles.imgbx}>
            <img src="https://raw.githubusercontent.com/Thilagavijayan/lpage/master/profit.png"></img>
          </div>
          <ul className={styles.sci}>
            <li>
              <a href="#">
                <img src="https://raw.githubusercontent.com/Thilagavijayan/lpage/master/instagram.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://raw.githubusercontent.com/Thilagavijayan/lpage/master/facebook.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://raw.githubusercontent.com/Thilagavijayan/lpage/master/twitter.png" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default HomePage
