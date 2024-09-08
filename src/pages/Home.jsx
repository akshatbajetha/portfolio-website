import React from 'react'
import Avatar from '../components/Avatar'
import Button from '../components/Button'
import {useTypewriter} from 'react-simple-typewriter'
import {motion} from 'framer-motion'

function Home() {
  const [text] = useTypewriter({
    words: ["a frontend developer", "learning Full Stack Development"],
    loop: 4,
  })


  return (
    <motion.div 
    initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
      }}
      exit={{ x: 100, opacity: 0 }}
    className='w-full h-screen flex overflow-y-hidden flex-row items-center justify-center home-page align-middle bg-white-background dark:bg-background'>
      
      <div className='flex justify-center items-center align-middle flex-col home-page'>
          <div className='text-center mb-2'>
            <h1 className='dark:text-text-colour text-black-text heading font-bold'>Hi, I am <span className='gradient'>Akshat Bajetha</span></h1>
          </div>
          <div className='text-center mb-2'>
            <h3><span className='dark:text-text-colour text-black-text subheading font-bold'>I am <span className='blue-gradient'>{text}</span></span></h3>
          </div>
          <div className='text-center mb-2 brief flex'>
            <p className='dark:text-off-text-colour text-off-black home-text'>I am a frontend developer. I am currently learning full stack development (MERN) and am interested in learning new technologies.</p>
          </div>
            <Button text={'View Resume'} />
      </div>
      <Avatar width='300px' />
    </motion.div>
  )
}

export default Home