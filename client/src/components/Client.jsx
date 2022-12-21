import { useMutation } from '@apollo/client'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { HiBadgeCheck } from 'react-icons/hi'
import { GET_CLIENT, GET_CLIENTS, DELETE_CLIENT } from '../services'

export const Client = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { loading, error, data: client } = useQuery(GET_CLIENT, { variables: { id } })

  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id },
    refetchQueries: [{ query: GET_CLIENTS }],
    onCompleted: () => navigate('/clients'),
  })

  if (loading) {
    return <p>Loading ...</p>
  } else if (error) {
    return <p>Error ...</p>
  } else if (!loading && !error) {
    return (
      <div name='platforms' className='w-full my-8'>
        <div className='max-w-[1240px] mx-auto px-2'>
          <h2 className='text-5xl font-bold text-center neo-m-text-simple'>
            [Client-{client.client.name}]
          </h2>
          <p className='text-2xl py-8 neo-m-text-simple text-center'>
            Detailed information of Client
          </p>

          <div className='grid sm:grid-cols-1 lg:grid-cols-1 gap-4 pt-4'>
            <div className='flex m-auto max-w-2xl neo-m-bg-border rounded p-3'>
              <div>
                <HiBadgeCheck className='w-7 mr-4 neo-m-text-primary' />
              </div>
              <div>
                <h3 className='font-bold neo-m-text-primary text-lg'>
                  Client: {client.client.name}
                </h3>
                <ul>
                  <li className='font-bold neo-m-text-simple max-w-4xl'>
                    Projects: ...names of projects
                  </li>
                  <li className='font-bold neo-m-text-simple'>Status: Status</li>
                  <li className='font-bold neo-m-text-simple'>Email: {client.client.email}</li>
                  <li className='font-bold neo-m-text-simple'>Phone: {client.client.phone}</li>
                </ul>
                <button
                  className='p-2 m-auto font-bold rounded neo-m-text '
                >
                  Update Client
                </button>
                <button className='p-2 m-auto font-bold rounded neo-m-text' onClick={deleteClient}>
                  Delete Client
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
