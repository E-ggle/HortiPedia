import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Join our hands to save Earth by Agriculture',
          'Join our Q&A to explore your doubts',
          'Join our Community to interact with mentor',
          'Check the weather forcast in your city'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40
      }}
    />
  )
}

export default Type
