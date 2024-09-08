import React from 'react'
import LinkedIn from '../assets/Logos/linkedin.svg'
import GithubContact from '../assets/Logos/githubContact.svg'
import Leetcode from '../assets/Logos/leetcode.svg'
import Twitter from '../assets/Logos/twitter.svg'

function ContactLinks() {
    const links = [
        {
            logo: LinkedIn,
            url: "https://www.linkedin.com/in/akshat-bajetha/"
        },
        
        {
            logo: Twitter,
            url: "https://twitter.com/akshatbajetha"
        }
    ]

    const blackLinks = [
        {
            logo: GithubContact,
            url: "https://github.com/akshatbajetha"
        },
        {
            logo: Leetcode,
            url: "https://leetcode.com/akshatbajetha/"
        },
    ]
  return (
    <>
    <div className='flex p-2 m-2 justify-center items-center orange-gradient text-3xl font-bold'>
        <h1>Social Links</h1>
    </div>
    <div className='flex justify-center items-center p-2'>
        {blackLinks.map((link) => (
            <a href={link.url} key={link.url} className='m-2 zoom' target="_blank" rel="noopener noreferrer">
                <img src={link.logo} alt="Logo" className='dark:invert' width={"30px"} />
            </a>
        ))}
        {links.map((link) => (
            <a href={link.url} key={link.url} className='m-2 zoom' target="_blank" rel="noopener noreferrer">
                <img src={link.logo} alt="Logo" width={"30px"} />
            </a>
        ))}
      </div>
      </>
  )
}

export default ContactLinks