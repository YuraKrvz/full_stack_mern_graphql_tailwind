export const SignUp = () => {
  return (
    <div name='platforms' className='w-full my-8'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center neo-m-text-simple'>SIGN UP</h2>
        <div className='grid sm:grid-cols-1 lg:grid-cols-1 gap-4 pt-4'>
          <div className='flex m-auto max-w-2xl neo-m-bg-border rounded p-3'>
            <div>
              <ul>
                <li>
                  <input
                    className='w-full p-2 mr-4 neo-m-input rounded mb-4'
                    type='text'
                    placeholder='Name'
                  />
                </li>
                <li>
                  <input
                    className='w-full p-2 mr-4 neo-m-input rounded mb-4'
                    type='text'
                    placeholder='Email'
                  />
                </li>
                <li>
                  <input
                    className='w-full p-2 mr-4 neo-m-input rounded mb-4'
                    type='text'
                    placeholder='Phone'
                  />
                </li>
                <li>
                  <button className='p-2 m-auto font-bold rounded neo-m-text'>Sign Up</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
