import React from 'react'
import { ModeToggle } from '@/components/utils/modeToggle'
import LogoutBtn from '@/components/auth/logoutBtn'
import Image from 'next/image'
import Link from 'next/link'
export default function NavBar() {
  return (
    <nav className='flex justify-between items-center py-3'>
      
      <div className='flex-1'>
        <Link href="/">
        <Image src="/assets/images/logo.png" width={60} height={60}  alt="Logo"/>

        </Link>
      </div>
      <div className=' flex flex-1 justify-center items-center'>
      {/* hidden lg:flex */}
      <ul className='flex justify-end gap-5 items-center w-full '>
        {/* <li>How to use</li>
        <li>content</li>
        <li>discount</li> */}
        <li><ModeToggle/></li>
        <li><LogoutBtn/></li>
      </ul>
      
      </div>
    </nav>
  )
}
