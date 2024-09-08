import React from 'react'
import MyPhoto from '../assets/myPhoto.jpeg'
import LogoCarousel from './LogoCarousel'

function AboutSection() {


  return (
    <>
      <div className='flex justify-center w-full about-me intro'>
        <div className='dark:text-text-colour text-black-text '>
        Hi guys, I am <span className='blue-gradient'>Akshat Bajetha</span> from Delhi, India, currently in my third year of Computer Science and Engineering from <span className='orange-gradient'>Bennett University</span>. I'm a self-taught web developer, currently learning MERN stack, who loves problem solving as well. I have a passion for learning and creating new things.
        </div>
        <div>
          <img src={MyPhoto} className='my-photo' alt="Avatar" width={"700px"} />
        </div>
      </div>
      <div className='text-center logo-carousel-container'>
        <h1 className='text-text-colour tech-heading font-bold orange-gradient mb-4 pb-4'>Technologies</h1>
        <LogoCarousel />
      </div>
    </>
    
  )
}

export default AboutSection