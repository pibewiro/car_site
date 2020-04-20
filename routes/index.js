import vue from "vue";
import VueRouter from "vue-router";
import Home from '../src/components/Home'
import Dashboard from '../src/components/Dashboard'
import ViewUser from '../src/components/ViewUser'
import Register from '../src/components/Register'
import AddCar from '../src/components/AddCar'
import ViewCars from '../src/components/ViewCars'
import Favorite from '../src/components/Favorite'
import ForgotPassword from '../src/components/ForgotPassword'
import PasswordRecovery from '../src/components/PasswordRecovery'

vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Home
  },

  {
    path: '/register',
    component: Register
  },

  {
    path: '/forgot-password',
    component: ForgotPassword
  },

  {
    path: '/password-recovery',
    component: PasswordRecovery
  },

  {
    path: "/dashboard",
    component: Dashboard,
    children: [{
        path: "/view_user",
        component: ViewUser
      }, {
        path: "/add_car",
        component: AddCar
      }, {
        path: "/view_cars",
        component: ViewCars
      },
      {
        path: "/my_cars",
        component: ViewCars
      },
      {
        path: "/favorites",
        component: Favorite
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;