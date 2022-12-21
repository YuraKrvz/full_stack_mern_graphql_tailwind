import { Link } from 'react-router-dom'
import { HiBadgeCheck } from 'react-icons/hi'
import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../services'

export const Projects = () => {
  const { loading, error, data: projects } = useQuery(GET_PROJECTS)

  if (loading) {
    return <p>Loading ...</p>
  } else if (error) {
    return <p>Error ...</p>
  } else if (!loading && !error) {
    return (
      <div name='platforms' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2'>
          <h2 className='text-5xl font-bold text-center neo-m-text-simple'>List of projects</h2>
          <p className='text-2xl py-8 neo-m-text-simple text-center'>
            List of projects. Here you can find the project you need. Click and go to the project
            page with its detailed information and information about its author..
          </p>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
            {projects.projects.map((project) => (
              <Link to={project.id} key={project.id}>
                <div className='flex neo-m-text neo-m-bg-border rounded p-3'>
                  <div>
                    <HiBadgeCheck className='w-7 mr-4' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg truncate max-w-[200px] '>
                      Project name: {project.name}
                    </h3>
                    <p className='text-lg pt-2 pb-4 truncate max-w-[200px] '>
                      {project.description}
                    </p>
                    <p className='text-lg pt-2 pb-4 truncate max-w-[200px] '>
                      Project status: {project.status}
                    </p>
                    <p className='text-lg pt-2 pb-4 truncate max-w-[200px] '>
                      Client: {project.client.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
