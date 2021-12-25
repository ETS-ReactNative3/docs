import React from 'react'

import Link from 'next/link'

export default function Footer() {
  return (
    <div className='mt-4 flex items-center justify-between'>
      <span>
        <Link href='https://www.chatty-cloud.com/legal/privacy'>
          <a className='mr-1.5 text-secondary hover:text-blue'>Privacy</a>
        </Link>
        <Link href='https://www.chatty-cloud.com/legal/siteterms'>
          <a className='text-secondary hover:text-blue'>Terms</a>
        </Link>
      </span>
      <span className='text-secondary'>&copy; 2021 ChattyCloud Inc.</span>
    </div>
  )
}
