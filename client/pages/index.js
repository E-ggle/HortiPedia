import React from 'react'
import Head from 'next/head'

const HomePage = () => {
  return (
    <div className="img-main">
      <Head>
        <title>HortiPedia-Main Page</title>
      </Head>
      <a href="./Home">
        <button className="img-btn">Link me to HortiPedia</button>
      </a>
    </div>
  )
}

export default HomePage
