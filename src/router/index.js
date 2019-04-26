import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import transLang from '../components/transLang'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testLang',
      component: transLang
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
