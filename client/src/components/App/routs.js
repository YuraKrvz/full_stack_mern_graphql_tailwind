import { Home } from '../../pages/Home'
import { Clients } from '../../pages/Clients'
import { Client } from '../../pages/Client'
import { Projects } from '../../pages/Projects'
import { Project } from '../../pages/Project'
import { SignIn } from '../../pages/SignIn'
import { SignUp } from '../../pages/SignUp'
import { AddClient } from '../../pages/AddClient'
import { AddProject } from '../../pages/AddProject'
import { NotFound } from '../../pages/NotFound'

export const routs = [
  { path: '/', Component: Home, index: 'index' },
  { path: '/clients', Component: Clients },
  { path: '/clients/:id', Component: Client },
  { path: '/projects', Component: Projects },
  { path: '/projects/:id', Component: Project },
  { path: '/add-client', Component: AddClient },
  { path: '/add-project', Component: AddProject },
  { path: '/sign-in', Component: SignIn },
  { path: '/sign-up', Component: SignUp },
  { path: '*', Component: NotFound },
]
