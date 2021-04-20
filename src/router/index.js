import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/pages/home/home')
const showprojectcms = () => import('@/components/showprojectcms')
const showprojectwechat = () => import('@/components/showprojectwechat')
const showprojectyipai = () => import('@/components/showprojectyipai')
const showprojecthunshehui = () => import('@/components/showprojecthunshehui')
export default new Router({
	// mode: 'history',
  routes: [
  	{
  	  path:"/",
  	  redirect: '/index'
  	},
    {
      path: '/index',
      name: 'Home',
      component: Home
    },
    {
      path: '/showprojectcms',
      name: 'ShowProjectCms',
      component: showprojectcms
    },
    {
      path: '/showprojectwechat',
      name: 'ShowProjectWechat',
      component: showprojectwechat
    },
    {
      path: '/showprojectyipai',
      name: 'ShowProjectYipai',
      component: showprojectyipai
    },
    {
      path: '/showprojecthunshehui',
      name: 'ShowProjectHunSheHui',
      component: showprojecthunshehui
    }
  ]
})
