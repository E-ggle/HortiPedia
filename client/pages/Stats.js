import React from 'react'
import styles from './Stats.module.css'
function Stats() {
  return (
    <div className={styles.body}>
      <iframe
        width="900"
        height="800"
        frameborder="0"
        scrolling="no"
        src="//plotly.com/~vmmuthu31/1.embed"
      ></iframe>
    </div>
  )
}

export default Stats
