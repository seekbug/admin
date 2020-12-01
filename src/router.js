import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/users/Login.vue'
import Index from './views/index/Index.vue'
import UsersCreate from './views/users/UsersCreate.vue'
import UsersIndex from './views/users/UsersIndex.vue'
import RolesIndex from './views/roles/RolesIndex.vue'
import RolesCreate from './views/roles/RolesCreate.vue'
import LimitsIndex from './views/limits/LimitsIndex.vue'
import OrdersGoods from './views/orders/OrdersGoods.vue'
import OrdersCreate from './views/orders/OrdersCreate.vue'
import OrdersRecycle from './views/orders/OrdersRecycle.vue'
import Welcome from './views/index/Welcome.vue'
import History from './views/index/History.vue'
import AttrCreate from './views/attr/AttrCreate.vue'
import GoodsType from './views/attr/GoodsType.vue'
import TypeCreate from './views/attr/TypeCreate.vue'
import GoodsAttr from './views/attr/GoodsAttr.vue'
import DingTotal from './views/dingd/DingTotal.vue'
import DingD from './views/dingd/DingD.vue'
import Drecycle from './views/dingd/Drecycle.vue'
import CateIndex from './views/cate/CateIndex.vue'
import CateCreate from './views/cate/CateCreate.vue'




Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Index,
            children: [
                {
                    path: 'cate',
                    component: CateIndex,
                },
                {
                    path: 'cate/create',
                    component: CateCreate,
                },
                {
                    path: 'welcome',
                    component: Welcome,
                },
                {
                    path: 'history',
                    component: History,
                },
                {
                    path: 'users',
                    component: UsersIndex,
                },
                {
                    path: 'users/create',
                    component: UsersCreate,
                },
                {
                    path: 'roles',
                    component: RolesIndex,
                },
                {
                    path: 'roles/create',
                    component: RolesCreate,
                },
                {
                    path: 'limits',
                    component: LimitsIndex,
                },
                {
                    path: 'orders',
                    component: OrdersGoods,
                },
                {
                    path: 'orders/create',
                    component: OrdersCreate,
                },
                {
                    path: 'orders/recycle',
                    component: OrdersRecycle,
                },
                {
                    path: 'goods/attr',
                    component: GoodsAttr,
                },
                {
                    path: 'goods/type',
                    component: GoodsType
                },
                {
                    path: 'type/create',
                    component: TypeCreate,
                },
                {
                    path: 'attr/create',
                    component: AttrCreate,
                },
                {
                    path: 'dingd',
                    component: DingD,
                },
                {
                    path: 'ding/total',
                    component: DingTotal,
                },
                {
                    path: 'ding/recycle',
                    component: Drecycle,
                },
            ]
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
