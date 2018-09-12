// import Add from '@/page/ADD'
// 路由懒加载
const Add = () => import('@/page/ADD')
const Have = () => import('@/page/Have')
const Edit = () => import('@/page/Edit')
const Tab = () => import('@/page/Tab')
const Login = () => import('@/page/Login')
export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Tab,
    children: [
      {
        path: '/add',
        name: 'Add',
        component: Add,
        meta: {
          title: '商品添加页'
        },
        // 路由导航 进入之前
        beforeEnter: (to, from, next) => {
          // ...
          next()
        }
      },
      {
        path: '/have',
        name: 'Have',
        component: Have
      },
      {
        path: '/edit/:id',
        props: true,
        name: 'edit',
        component: Edit
      }
    ]
  }
]
