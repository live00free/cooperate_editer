import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import MyTask from '../components/mytask/MyTask.vue'
import NewTask from '../components/newtask/NewTask.vue'
import TaskState from '../components/taskstate/TaskState.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'login'},
  { path:'/login',component: Login },
  { 
	path:'/home',component: Home,
	redirect: '/welcome',
	children: [
		{ path: '/welcome', component: Welcome },
		{ path: '/home/users', component: Users },
		{ path: '/home/mytask', component: MyTask },
		{ path: '/home/newttask', component: NewTask },
		{ path: '/home/taskstate', component: TaskState }
	]
   }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
