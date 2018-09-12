// import Add from '@/page/ADD'
// 路由懒加载
const Add = () => import('@/page/ADD')
const Have = () => import('@/page/Have')
const Edit = () => import('@/page/Edit')
export default [
  {
    path: '/',
    redirect: '/add'
  },
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
