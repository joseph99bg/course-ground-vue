<script>
import axios from 'axios'
import authStore from '../store/auth.js'

export default {
  data() {
    return {
      currentUser: localStorage.getItem('current-user')
    }
  },
  methods: {
    login(username, password) {
      const user = {
        username,
        password
      }
      axios('http://localhost:3000/api/user/login', {
        method: "post",
        data: user,
        withCredentials: true
      })
        .then(res => {
          this.currentUser = res.data.username;
          localStorage.setItem('current-user', res.data.username);
          localStorage.setItem('current-user-id', res.data._id);
          authStore.setUser(res.data.username)
        })
    },
    logout() {
      axios('http://localhost:3000/api/user/logout', {
        method: "post",
        withCredentials: true
      })
        .then(() => {
          this.currentUser = null;
          localStorage.removeItem('current-user');
          localStorage.removeItem('current-user-id');
          authStore.clearUser()
        })
    }
  },
  computed: {
    isLogged() {
      return !!this.currentUser
    }
  }
}
</script>