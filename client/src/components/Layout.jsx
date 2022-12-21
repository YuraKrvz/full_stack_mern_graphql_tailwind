import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='pt-[90px]'>
        {/* h-[100%]*/}
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
