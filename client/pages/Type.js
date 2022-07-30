import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Join our hands to save Earth by Agriculture....',
          'Join our Q&A',
          'Join our Community',
          'Check the weather in your area'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  )
}

export default Type
