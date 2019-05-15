import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/homecon'
import Aboutus from '@/views/aboutus'
import Success from '@/views/success'
import Intelligent from '@/views/intelligent'
import Contactus from '@/views/contactus'
// 子路由
import Intgovernzw from '@/views/home/intgovernzw/intgovernzw'
import Intgovernyl from '@/views/home/intgovernyl/intgovernyl'
import Intgovernjk from '@/views/home/intgovernjk/intgovernjk'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		meta:{index:0},
		component: Home
	},
	{
		path: '/intgovernzw',
		meta:{index:1},
		component: Intgovernzw	
	},
	{
		path: '/intgovernyl',
		meta:{index:2},
		component: Intgovernyl
	},
	{
		path: '/intgovernjk',
		meta:{index:3},
		component: Intgovernjk
	},
    {
		path: '/aboutus',
		meta:{index:4},
		component: Aboutus
    },
    {
		path: '/success',
		meta:{index:5},
		component: Success
    },
    {
		path: '/intelligent',
		meta:{index:6},
		component: Intelligent
    },
    {
		path: '/contactus',
		meta:{index:7},
		component: Contactus
    },
  ]
})
