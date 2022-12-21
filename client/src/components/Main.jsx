import mainImg from '../assets/mainImg.png'
import { FaCheck } from 'react-icons/fa'

export const Main = () => {
  return (
    <div name='home' className='w-full h-screen flex flex-col justify-between'>
      <div
        className='m-auto pb-[300px] grid md:grid-cols-2 max-w-[1240px]'
        comment=' sm2:mt-[50px] sm:mt-[80px] '
      >
        <div className='flex flex-col justify-center md:items-start mx-auto w-full px-2 py-8'>
          <p className='text-2xl neo-m-text-simple'>Maximum communications & Results</p>
          <h1 className='py-3 text-5xl md:text-7xl sm2:text-2xl font-bold neo-m-text-simple'>
            Clients & Projects
          </h1>
          <p className='text-2xl neo-m-text-simple'>The result is guaranteed.</p>
          <button className='py-3 px-6 sm:w-[60%] my-4 neo-m-btn-primary rounded'>Start.</button>
        </div>
        <div className='max-w-[600px] neo-bg-shw'>
          <img className='w-full opacity-70' src={mainImg} alt='/' />
        </div>
        <div
          className='absolute flex flex-col py-8 md:min-w-[400px] bottom-[5%]
                mx-1 md:left-1/2 transform md:-translate-x-1/2
                border rounded text-center neo-m-bg-border'
        >
          <p className='neo-m-text-simple font-bold'>Services</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='font-bold flex px-4 py-2 neo-m-text-simple'>
              <FaCheck className='h-6 neo-m-text-simple' /> Preparing
            </p>
            <p className='font-bold flex px-4 py-2 neo-m-text-simple'>
              <FaCheck className='h-6 neo-m-text-simple' /> Security
            </p>
            <p className='font-bold flex px-4 py-2 neo-m-text-simple'>
              <FaCheck className='h-6 neo-m-text-simple' /> Saving
            </p>
            <p className='font-bold flex px-4 py-2 neo-m-text-simple'>
              <FaCheck className='h-6 neo-m-text-simple' /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
