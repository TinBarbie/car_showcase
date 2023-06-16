import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center padding-x padding-y'>
            <Link href="/" className='flex-center'>
                <Image alt='Car Hub Logo' src="/logo.svg" width={118} height={18} className='object-contain'/>
            </Link>
            <CustomButton title="Sign In" btnType="button" containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]' />
        </nav>
    </header>
  )
}

export default Navbar