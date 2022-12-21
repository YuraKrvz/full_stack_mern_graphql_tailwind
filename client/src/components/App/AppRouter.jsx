import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { routs } from './routs'
import { Layout } from '../Layout'

export const AppRouter = ({ children }) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          {routs.map(({ Component, ...props }) => (
            <Route path={props.path} element={<Component />} {...props} key={props.path} />
          ))}
        </Route>
      </Routes>
    </Router>
  )
}
