import Login from 'views/Login'
import BaseLayout from 'comps/BaseLayout'
import Home from 'views/Home'

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      }
    ]
  }
]
