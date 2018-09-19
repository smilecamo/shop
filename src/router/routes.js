// import Add from '@/page/ADD'
// 路由懒加载
const Login = () => import('@/page/Login/Login')
const Err = () => import('@/common/404')
const Add = () => import('@/page/user/ADD')
const Have = () => import('@/page/user/Have')
const Edit = () => import('@/page/user/Edit')
const UserTab = () => import('@/page/user/Tab')
const AdminTab = () => import('@/page/admin/adminTab')
const Audited = () => import('@/page/admin/Audited')
const Account = () => import('@/page/admin/Account')
const NewAccount = () => import('@/page/admin/NewAccount')
const ModifyAccount = () => import('@/page/admin/ModifyAccount')
const PendingReview = () => import('@/page/admin/PendingReview')
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
    path: '/UserTab',
    name: 'UserTab',
    component: UserTab,
    meta: {
      needLogin: 'true'
    },
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
  },
  {
    path: '/adminTab',
    component: AdminTab,
    name: 'AdminTab',
    children: [
      {
        name: 'PendingReview',
        path: '/PendingReview',
        component: PendingReview
      },
      {
        name: 'Account',
        path: '/Account',
        component: Account
      },
      {
        name: 'ModifyAccount',
        path: '/ModifyAccount/:id',
        component: ModifyAccount
      },
      {
        name: 'NewAccount',
        path: '/NewAccount',
        component: NewAccount
      },
      {
        name: 'Audited',
        path: '/Audited',
        component: Audited
      }
    ]
  },
  {
    path: '*',
    component: Err,
    meta: {
      title: 'Err'
    }
  }
]
