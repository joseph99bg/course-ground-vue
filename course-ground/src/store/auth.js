import Vue from 'vue'

const authStore = new Vue({
  data: {
    user: localStorage.getItem('current-user')
  },
  methods: {
    setUser(user) {
      this.user = user;
    },
    clearUser() {
      this.user = null;
    }
  }
});

export default authStore;