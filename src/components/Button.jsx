import React from 'react'
import Resume from '../assets/resume.pdf'

function Button({text}) {

  const downloadFunc = () => {
    window.open(Resume, '_blank')
  }

  return (
    <button onClick={downloadFunc} className='dark:border-text-colour border-black-text border-2 px-4 py-2 mt-5 dark:text-text-colour text-black-text rounded-3xl glow-button text-xl font-semibold'>{text}</button>
  )
}

export default Button