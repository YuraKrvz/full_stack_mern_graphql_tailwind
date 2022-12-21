import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenu, HiOutlineX } from 'react-icons/hi'

export const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false)
  const handlerMenu = () => setIsMenu(!isMenu)

  return (
    <div className='w-screen h-[80px] z-10 neo-m-bg-border fixed '>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl neo-m-text'>LOGO.</h1>
          <ul className='hidden md:flex'>
            <li className='font-bold neo-m-text cursor-pointer'>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className='font-bold neo-m-text cursor-pointer'>
              <NavLink to='/clients'>Clients</NavLink>
            </li>
            <li className='font-bold neo-m-text cursor-pointer'>
              <NavLink to='/projects'>Projects</NavLink>
            </li>
            <li className='font-bold neo-m-text cursor-pointer'>
              <NavLink to='/add-client'>Add Client</NavLink>
            </li>
            <li className='font-bold neo-m-text cursor-pointer'>
              <NavLink to='/add-project'>Add project</NavLink>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <NavLink
            to='/sign-in'
            className='py-3 font-bold border-none bg-transparent neo-m-text mr-4'
          >
            Sign In
          </NavLink>
          <NavLink to='/sign-up' className='font-bold px-8 py-3 neo-m-btn-primary rounded'>
            Sign Up
          </NavLink>
        </div>
        <div className='md:hidden mr-4' onClick={handlerMenu}>
          {!isMenu ? (
            <HiMenu className='w-10 h-10 neo-m-text' />
          ) : (
            <HiOutlineX className='w-10 h-10 neo-m-text' />
          )}
        </div>
      </div>

      <ul className={!isMenu ? 'hidden' : 'absolute bg-[#e4ebf5] w-full px-8'}>
        <li className='font-bold neo-m-text border-b-2 border-zinc-300 w-full'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='font-bold neo-m-text border-b-2 border-zinc-300 w-full'>
          <NavLink to='/clients'>Clients</NavLink>
        </li>
        <li className='font-bold neo-m-text border-b-2 border-zinc-300 w-full'>
          <NavLink to='/create-client'>Add Client</NavLink>
        </li>
        <li className='font-bold neo-m-text border-b-2 border-zinc-300 w-full'>
          <NavLink to='/projects'>Projects</NavLink>
        </li>
        <li className='font-bold neo-m-text border-b-2 border-zinc-300 w-full'>
          <NavLink to='/create-project'>Create project</NavLink>
        </li>

        <div className='flex flex-col my-4'>
          <NavLink to='/sign-in' className='font-bold bg-transparent neo-m-text px-8 py-3 mb-4'>
            Sign In
          </NavLink>
          <NavLink to='/sign-up' className='font-bold px-8 py-3 neo-m-btn-primary rounded'>
            Sign Up
          </NavLink>
        </div>
      </ul>
    </div>
  )
}
