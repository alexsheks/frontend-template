import { RouterProvider } from 'react-router-dom'
import router from './routes/router'

// main router
function App() {
  return <RouterProvider router={router} />
}

export default App
