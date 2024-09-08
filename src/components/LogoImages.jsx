import React from 'react'

function LogoImages({src, name}) {
  return (
    <div className='flex flex-col text-center min-h-full'>
        <img src={src} width={"80px"} height={"80px"} alt="" />
        <p className='dark:text-text-colour text-black-text'>{name}</p>
    </div>
  )
}

export default LogoImages