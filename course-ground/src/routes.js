import CoursesList from './components/courses/List'
import AddCourse from './components/courses/AddCourse'
import EditCourse from './components/courses/EditCourse'
import courseDetails from './components/courses/Details'
import About from './components/static/About'
import Contact from './components/static/Contact'
import NotFound from './components/static/Not-Found'
import Login from './components/user/Login'
import Register from './components/user/Register'

import authStore from './store/auth'

export default [
  {
    path: '/',
    component: CoursesList
  },
  {
    path: '/my-courses',
    component: CoursesList,
    props: {
      myCourses: true
    },
    beforeEnter: (to, from, next) => {
      if (!authStore.user) {
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/courses-enrolled',
    component: CoursesList,
    props: {
      coursesEnrolled: true
    },
    beforeEnter: (to, from, next) => {
      if (!authStore.user) {
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/course/edit/:id',
    component: EditCourse,
    beforeEnter: (to, from, next) => {
      if (!authStore.user) {
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/course/:id',
    component: courseDetails
  },
  {
    path: '/add-course',
    component: AddCourse,
    beforeEnter: (to, from, next) => {
      if (!authStore.user) {
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '*',
    component: NotFound
  }
]