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
const Review = () => import('@/page/admin/Review')
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
          title: '商品添加页',
          needLogin: 'true'
        }
      },
      {
        path: '/have',
        name: 'Have',
        component: Have,
        meta: {
          needLogin: 'true'
        }
      },
      {
        path: '/edit',
        name: 'edit',
        component: Edit,
        meta: {
          needLogin: 'true'
        }
      }
    ]
  },
  {
    path: '/adminTab',
    component: AdminTab,
    name: 'AdminTab',
    meta: {
      needLogin: 'true',
      admin: 'true'
    },
    children: [
      {
        name: 'PendingReview',
        path: '/PendingReview',
        component: PendingReview,
        meta: {
          needLogin: 'true',
          admin: 'true'
        }
      },
      {
        name: 'Account',
        path: '/Account',
        component: Account,
        meta: {
          needLogin: 'true',
          admin: 'true'
        }
      },
      {
        name: 'Review',
        path: '/Review',
        component: Review,
        meta: {
          needLogin: 'true',
          admin: 'true'
        }
      },
      {
        name: 'ModifyAccount',
        path: '/ModifyAccount',
        component: ModifyAccount,
        meta: {
          needLogin: 'true',
          admin: 'true'
        }
      },
      {
        name: 'NewAccount',
        path: '/NewAccount',
        component: NewAccount,
        meta: {
          needLogin: 'true',
          admin: 'true'
        }
      },
      {
        name: 'Audited',
        path: '/Audited',
        component: Audited,
        meta: {
          needLogin: 'true',
          admin: 'true'
        }
      },
      {
        path: '*',
        component: Err,
        meta: {
          title: 'Err'
        }
      }
    ]
  }
]
