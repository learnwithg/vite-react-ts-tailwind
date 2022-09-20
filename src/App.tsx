import { useRoutes } from 'react-router-dom'
import { routes } from './routes/app-routes'

function App() {
  const AppRoutes = useRoutes(routes)

  return AppRoutes
}

export default App
