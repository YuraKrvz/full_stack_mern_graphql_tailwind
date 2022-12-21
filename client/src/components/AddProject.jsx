import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_PROJECT, GET_PROJECTS } from '../services'

export const AddProject = () => {
  const [clientId, setClientId] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')

  const [addClient] = useMutation(ADD_PROJECT, {
    variables: { clientId, name, description, status },
    update(cache, { data: { addProject } }) {
      const { clients } = cache.readQuery({ query: GET_PROJECTS })

      cache.writeQuery({
        query: GET_PROJECTS,
        data: { clients: [...clients, addProject] },
      })
    },
  })

  const handlerSubmit = (e) => {
    e.preventDefault()

    if (clientId === '' || name === '' || description === '' || status === '') {
      return alert('Invalid form')
    }

    addClient(clientId, name, description, status)

    setClientId('')
    setName('')
    setDescription('')
    setStatus('')
  }

  return (
    <div name='platforms' className='w-full my-8'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center neo-m-text-simple'>Add project</h2>
        <div className='grid sm:grid-cols-1 lg:grid-cols-1 gap-4 pt-4'>
          <div className='flex m-auto max-w-2xl neo-m-bg-border rounded p-3'>
            <div>
              <ul>
                <li>
                  <input
                    className='w-full p-2 mr-4 neo-m-input rounded mb-4'
                    type='text'
                    placeholder='Client Id'
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                  />
                </li>
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
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </li>
                <li>
                  <input
                    className='w-full p-2 mr-4 neo-m-input rounded mb-4'
                    type='text'
                    placeholder='Status: active,inactive,archived'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </li>
                <li>
                  <button
                    className='p-2 m-auto font-bold rounded neo-m-text'
                    onClick={handlerSubmit}
                  >
                    Add project
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
