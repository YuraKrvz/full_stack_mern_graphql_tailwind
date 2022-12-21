import { FaFacebook, FaInstagram, FaTwitter, FaPaperPlane } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='w-full mt-24 neo-m-bg-border neo-m-text-simple py-y px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 py-8'>
        <div>
          <h6 className='font-bold neo-m-text uppercase pt-2'>Navigation</h6>
          <ul>
            <li className='py-1 neo-m-text cursor-pointer'>
              <Link to='/'>Home</Link>
            </li>
            <li className='py-1 neo-m-text cursor-pointer'>
              <Link to='/clients'>Clients</Link>
            </li>
            <li className='py-1 neo-m-text cursor-pointer'>
              <Link to='/create-client'>Add Client</Link>
            </li>
            <li className='py-1 neo-m-text cursor-pointer'>
              <Link to='/projects'>Projects</Link>
            </li>
            <li className='py-1 neo-m-text cursor-pointer'>
              <Link to='/create-project'>Create project</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold neo-m-text uppercase pt-2'>Recomendations</h6>
          <ul>
            <li className='py-1 neo-m-text cursor-pointer'>Main recomendations</li>
            <li className='py-1 neo-m-text cursor-pointer'>Statuses and recom.</li>
            <li className='py-1 neo-m-text cursor-pointer'>How Add Client</li>
            <li className='py-1 neo-m-text cursor-pointer'>How create project</li>
            <li className='py-1 neo-m-text cursor-pointer'>Success stories</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold neo-m-text uppercase pt-2'>Other</h6>
          <ul>
            <li className='py-1 neo-m-text cursor-pointer'>About Us</li>
            <li className='py-1 neo-m-text cursor-pointer'>Social media</li>
            <li className='py-1 neo-m-text cursor-pointer'>Channels</li>
            <li className='py-1 neo-m-text cursor-pointer'>Statuses</li>
          </ul>
        </div>
        <div className='col-span-2 neo-m-text pt-8 md:pt-2'>
          <p className='font-bold neo-m-text uppercase'>Find project</p>
          <p className='py-4 neo-m-text-simple'>If you cannot find a project.</p>
          <form className='flex flex-col sm:flex-row'>
            <input
              className='w-full p-2 mr-4 neo-m-input rounded mb-4'
              type='email'
              placeholder='Project name..'
            />
            <button className='p-2 mb-4 font-bold rounded neo-m-text'>Search</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center'>
        <p className='py-4 neo-m-text-simple'>
          Footer with some important information for footer. And social media.
        </p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaPaperPlane className='neo-m-text cursor-pointer' />
          <FaFacebook className='neo-m-text cursor-pointer' />
          <FaInstagram className='neo-m-text cursor-pointer' />
          <FaTwitter className='neo-m-text cursor-pointer' />
        </div>
      </div>
    </div>
  )
}
