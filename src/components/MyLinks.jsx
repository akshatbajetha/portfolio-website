import React from 'react'
import ContactLinks from './ContactLinks'
import ContactForm from './ContactForm'


function MyLinks() {

  return (
    <div className='flex flex-col'>
      <ContactForm />
      <ContactLinks />
    </div>
  )
}

export default MyLinks