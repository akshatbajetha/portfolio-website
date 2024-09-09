import React from 'react'
import Photo from '../assets/avatar.png'

function Avatar() {
  return (
    <div className='mb-10'>
      <img className='m-1 p-1 avatar-pic' src={Photo} alt="Logo"/>
    </div>
  )
}

export default Avatar