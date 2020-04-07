import Vue from 'vue'

const authStore = new Vue({
  data: {
    user: localStorage.getItem('current-user'),
    userId: localStorage.getItem('current-user-id')
  },
  methods: {
    setUser(user, userId) {
      this.user = user;
      this.userId = userId;
    },
    clearUser() {
      this.user = null;
      this.userId = null;
    }
  }
});

export default authStore;