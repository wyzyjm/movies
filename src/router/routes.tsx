import Home from '@/pages/Home'
import type { RouteObject } from 'react-router-dom'


const routes: RouteObject[] = [{
  path: '/',
  element: <Home />,
  children: [
    {
      path: '/',
      element: <div>剧情</div>
    }
  ]
}]

export default routes