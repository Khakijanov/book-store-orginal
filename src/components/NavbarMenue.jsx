import React from 'react'
import './Navbar.css'

function NavbarMenue() {
  return (
    <div className='container max-w-[910px] mx-auto px-14 py-6'>
        <ul className='flex justify-between items-center '>
            <li className='relative myAfterRight  px-10 text-gray-500 hover:text-PrimaryColor transitionAll font-semibold hover: '><a href="#">Home</a></li>
            <li className='relative myAfterRight myAfterLeft px-10 text-gray-500 hover:text-PrimaryColor transitionAll font-semibold'><a href="#">About</a></li>
            <li className='relative myAfterRight myAfterLeft px-10 text-gray-500 hover:text-PrimaryColor transitionAll font-semibold'><a href="#">Blog</a></li>
            <li className='relative myAfterRight myAfterLeft px-10 text-gray-500 hover:text-PrimaryColor transitionAll font-semibold'><a href="#">Books</a></li>
            <li className='relative  myAfterLeft px-10 text-gray-500 hover:text-PrimaryColor transitionAll font-semibold'><a href="#">Contact</a></li>
        </ul>
    </div>
  )
}

export default NavbarMenue