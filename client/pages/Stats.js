import React from 'react'
import styles from './stats.module.css'
function Stats() {
  return (
    <div className={styles.body}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className={styles.coursecard}>
              <div
                style="background: #feb548;"
                className={styles.coursecardimg}
              >
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/sketch-2-logo-png-transparent.png"
                  className={styles.main}
                  alt=""
                />
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/sketch-2-logo-png-transparent.png"
                  className={styles.layered}
                  alt=""
                />
              </div>
              <div className={styles.coursecardcontent}>
                <h4>Sketch App MasterclassName</h4>
                <h6>$ 19.99</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
