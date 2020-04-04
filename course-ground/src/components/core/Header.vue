<template>
  <header>
    <div class="top-bar green-back">
      <ul class="top-nav">
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/register">Register</router-link>
        </li>
        <li>
          <a @click="logout()">Logout</a>
        </li>
      </ul>
    </div>
    <div class="main-header">
      <div class="logo-holder">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Course Ground">
        </router-link>
      </div>
      <div class="navigation">
        <ul class="nav">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <a>My Courses</a>
          </li>
          <li>
            <a>Courses Enrolled</a>
          </li>
          <li>
            <router-link to="/add-course">Add Course</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: function() {
    return {
      
    }
  },
  methods: {
    logout() {
      console.log('Logout Works!');
    }
  }
}
</script>

<style scoped>
  header {
      box-shadow: 0 0 10px rgba(0,0,0,.3);
  }
  ul.top-nav {
      margin: 0;
      text-align: right;
  }
  .top-nav li {
      list-style: none;
      display: inline-block;
      margin: 7px 10px;
  }
  .top-nav li a {
      font-family: 'Ubuntu';
      font-size: 20px;
      color: #FFF;
      text-decoration: none;
      cursor: pointer;
  }
  .top-nav li a.active {
      color: #333;
  }
  .top-nav li a:hover {
      text-decoration: underline;
  }
  .main-header {
      max-width: 100%;
      width: 1500px;
      margin: 0 auto;
      padding: 20px 0;
  }
  .logo-holder {
      width: 25%;
      display: inline-block;
      vertical-align: middle;
  }
  .logo-holder img {
      width: 100%;
  }
  .navigation {
      width: 70%;
      display: inline-block;
      text-align: right;
  }
  ul.nav {
      margin: 0;
  }
  ul.nav li {
      list-style: none;
      display: inline-block;
      margin: 0 5px;
  }
  ul.nav li a {
      font-size: 20px;
      font-family: 'Ubuntu';
      color: #333;
      text-decoration: none;
      padding: 10px 15px;
      border: 2px solid #FFF;
  }
  ul.nav li a:hover,
  ul.nav li a.active {
      color: #00cd8c;
      border-bottom: 2px solid #00cd8c;
  }
</style>