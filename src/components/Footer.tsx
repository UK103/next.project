import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='flex gap-5 p-6 bg-blue-400'>
      <Link href="\">Home Page</Link>
      <Link href="\Address">Address Page</Link>
      <Link href="\About">About Page</Link>
      <Link href="\Contact">Contact Page</Link>
    </div>
  )
}

export default Footer
