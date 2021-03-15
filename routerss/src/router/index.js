import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/about' },//Burada "/" bu path den "/about" bu pathe yönlendirdik
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),

  },
  {
    path: '/about/:id/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'posts',
        name: 'Posts',
        component: () => import('../views/panel/posts.vue')
      }
    ]
  },
  //!---------------Navigater  Guard----------------------------------
  {
    path: '/panel',
    name: 'Panel',
    component: () => import('../views/selam.vue'),
    beforeEnter(to, from,next) {
      const answers = confirm('Kontorl noktasına giriyormusun')
      if (answers) {
        next(false)
        return
      } else {
        next()
      }

    },

    children: [
      {
        path: 'no1',
        name: 'No1',
        component: () => import('../views/control/no1.vue')
      },
      {
        path: 'no2',
        name: 'No2',
        component: () => import('../views/control/no2.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.afterEach( (to, from) => {
//  console.log(from);
// })
export default router
