import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page1 from '../components/page1'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1,
      children: [
        {
          path: '',
          component: { template: '<div>this is bar</div>' }
        },
        {
          path: 'bar',
          component: { template: '<div>this is bar</div>' }
        },
        {
          path: 'foo',
          component: { template: '<div>this is foo</div>' }
        }
      ]
    }
  ]
})
