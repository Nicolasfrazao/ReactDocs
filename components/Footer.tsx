import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-400 flex-between body-text w-full gap-y-12 border-t border-black-200 bg-black-100 px-20 py-10 max-md:flex-col'>
      <p>
        Copyright © 2023 Nicolas Frazao | All Rights Reserved
      </p>
      <div className='flex gap-x-11'>
        <Link href="/terms-of-use">
          Terms & Conditions
        </Link>
        <Link href="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}

export default Footer
