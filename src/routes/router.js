import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Layout from '../Layout'

// router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])

export default router
