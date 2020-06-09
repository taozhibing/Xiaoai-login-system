import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          title: '首页',
        }
      },
      {
        path: 'published',
        name: 'Published',
        component: () => import('../views/published/Published'),
        meta: {
          title: '已发布页'
        }
      },
      {
        path: 'census',
        name: 'Census',
        component: () => import('../views/census/Census'),
        meta: {
          title: '统计页'
        }
      },
      {
        path: 'publishArticle',
        name: 'PublishArticle',
        component: () => import('../views/publishArticle/PublishArticle'),
        meta: {
          title: '发表文章页'
        }
      },
      {
        path: 'label',
        name: 'Label',
        component: () => import('../views/label/Label'),
        meta: {
          title: '标签页'
        }
      },
      {
        path: 'deriveExcel',
        name: 'DeriveExcel',
        component: () => import('../views/deriveExcel/DeriveExcel'),
        meta: {
          title: '导出excel页'
        }
      },
      {
        path: 'picturesUploaded',
        name: 'PicturesUploaded',
        component: () => import('../views/picturesUploaded/PicturesUploaded'),
        meta: {
          title: '图片上传页'
        }
      },
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register'),
    meta: {
      title: '注册页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login'),
    meta: {
      title: '登录页'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
let whitePath = ['/login', '/register',]

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  let user = JSON.parse(localStorage.getItem('user'))
  if (whitePath.includes(to.path)) {
    next()
  } else {
    user ? next() : next('/login')
  }
})
export default router
