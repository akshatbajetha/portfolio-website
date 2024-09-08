import React from 'react'
import HeaderLogo from '../assets/signature.png'

function Logo({width='100px'}) {
  return (
    <div>
      <img className='m-1 p-1 invert dark:invert-0' src={HeaderLogo} alt="Logo" width={width} />
    </div>
  )
}

export default Logo