import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/signIn'
import Favorites from '@/components/Favorites'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
