import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import User from '@/components/User'
import FavoriteUser from '@/components/FavoriteUser'
import UserDetail from '@/components/UserDetail'

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      redirect: "/user",
      children: [
        {
          path: '/user',
          name: 'user',
          component: User,
        },
        {
          path: '/favorite-user',
          name: 'favoriteuser',
          component: FavoriteUser
        },
        {
          path: '/user-detail/:id',
          name: 'userDetail',
          component: UserDetail
        }
      ]
    }
  ]
})

export default router