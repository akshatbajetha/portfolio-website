import React from 'react'
import Photo from '../assets/avatar.png'

function Avatar({width='100px'}) {
  return (
    <div className='mb-10'>
      <img className='m-1 p-1' src={Photo} alt="Logo" width={width} />
    </div>
  )
}

export default Avatar