import { HiBadgeCheck } from 'react-icons/hi'
import { useMutation, useQuery } from '@apollo/client'
import { DELETE_PROJECT, GET_PROJECT, GET_PROJECTS } from '../services'
import { useNavigate, useParams } from 'react-router-dom'

export const Project = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { loading, error, data: project } = useQuery(GET_PROJECT, { variables: { id } })

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id },
    refetchQueries: [{ query: GET_PROJECTS }],
    onCompleted: () => navigate('/projects'),
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
            [Project-{project.project.name}]
          </h2>
          <p className='text-2xl py-8 neo-m-text-simple text-center'>
            Detailed information of projects
          </p>

          <div className='grid sm:grid-cols-1 lg:grid-cols-1 gap-4 pt-4'>
            <div className='flex m-auto max-w-2xl neo-m-bg-border rounded p-3'>
              <div>
                <HiBadgeCheck className='w-7 mr-4 neo-m-text-primary' />
              </div>
              <div>
                <h3 className='font-bold neo-m-text-primary text-lg'>
                  Name project: {project.project.name}{' '}
                </h3>
                <ul>
                  <li className='font-bold neo-m-text-simple'>
                    Description: {project.project.description}
                  </li>
                  <li className='font-bold neo-m-text-simple'>
                    Status of project: {project.project.status}
                  </li>
                  <li className='font-bold neo-m-text-simple'>
                    Name Client of project: {project.project.client.name}
                  </li>
                  <li className='font-bold neo-m-text-simple'>
                    Phone client of project: {project.project.client.phone}
                  </li>
                  <li className='font-bold neo-m-text-simple'>
                    Email client of project: {project.project.client.email}
                  </li>
                </ul>
                <button
                  className='p-2 m-auto font-bold rounded neo-m-text '
                >
                  Update Client
                </button>
                <button className='p-2 m-auto font-bold rounded neo-m-text' onClick={deleteProject}>
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
