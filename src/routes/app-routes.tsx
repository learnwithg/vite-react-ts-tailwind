import Home from '#components/Home'
import { RouteObject } from 'react-router-dom'

export interface RoutePathDefinition extends RouteObject {
  title?: string
  children?: RoutePathDefinition[]
  path: string
}

export const routes: RoutePathDefinition[] = [
  {
    path: '/',
    title: 'HOME',
    element: <Home />
  }
]
