import CoursesList from './components/courses/List'
import AddCourse from './components/courses/AddCourse'
import courseDetails from './components/courses/Details'
import About from './components/static/About'
import Contact from './components/static/Contact'
// import NotFound from './components/static/Not-Found'
import Login from './components/user/Login'
import Register from './components/user/Register'

export default [
  {
    path: '/',
    component: CoursesList
  },
  {
    path: '/course/:id',
    component: courseDetails
  },
  {
    path: '/add-course',
    component: AddCourse
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
  }
]