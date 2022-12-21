import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_CLIENT, GET_CLIENTS } from '../services'

export const AddClient = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS })

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      })
    },
  })

  const handlerSubmit = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || phone === '') {
      return alert('Invalid form')
    }

    addClient(name, email, phone)

    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <div name='platforms' className='w-full my-8'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center neo-m-text-simple'>Add Client</h2>
        <div className='grid sm:grid-cols-1 lg:grid-cols-1 gap-4 pt-4'>
          <div className='flex m-auto max-w-2xl neo-m-bg-border rounded p-3'>
            <div>
              <ul>
                <li>
                  <input
                    className='w-full p-2 mr-4 neo-m-input rounded mb-4'
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </li>
                <li>
                  <input
                    className='w-full p-2 mr-4 neo-m-input rounded mb-4'
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </li>
                <li>
                  <input
                    className='w-full p-2 mr-4 neo-m-input rounded mb-4'
                    type='text'
                    placeholder='Phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </li>
                <li>
                  <button
                    className='p-2 m-auto font-bold rounded neo-m-text'
                    onClick={handlerSubmit}
                  >
                    Add Client
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
