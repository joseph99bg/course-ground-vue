<script>
import axios from 'axios'

export default {
  data() {
    return {
      isLogged: false
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
          console.log(res);
          this.isLogged = true
        })
    },
    logout() {

    }
  }
}
</script>