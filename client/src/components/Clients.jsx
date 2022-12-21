import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_CLIENTS } from '../services'

export const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS)

  if (loading) {
    return <p>Loading ...</p>
  } else if (error) {
    return <p>Error ...</p>
  } else if (!loading && !error) {
    return (
      <div className='w-full my-32 px-2'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='text-center'>
            <h2 className='text-5xl font-bold neo-m-text-simple'>
              Verified Clients. We trust them.
            </h2>
            <p className='text-3xl py-6 neo-m-text-simple'>
              Verified clients. We trust them and we know they will take results. Also we give all
              information of they. Click for view on card. And join us.
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-1 px-2 text-center cursor-pointer'>
            {data.clients.map((client) => (
              <Link to={client.id} key={client.id}>
                <div className='border py-8 rounded neo-m-bg-border'>
                  <p className='text-6xl font-bold neo-m-text'>{client.name}</p>
                  <p className='neo-m-text-simple mt-2'>Name: {client.name}</p>
                  <p className='neo-m-text-simple mt-2'>Email: {client.email}</p>
                  <p className='neo-m-text-simple mt-2'>Phone: {client.phone}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
