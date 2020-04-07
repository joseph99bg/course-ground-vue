<template>
  <div class="error-page text-center">
    <h1 class="purple-color">404</h1>
    <h2 class="purple-color">Page Not Found!</h2>
    <router-link class="green-back green-border" to="/">Go Back to Home</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .error-page h1 {
    font-size: 200px;
    margin: 0;
  }

  .error-page h2 {
    font-size: 50px;
    margin: 0;
  }

  .error-page a {
    font-size: 20px;
    color: #FFF;
    text-decoration: none;
    padding: 20px 40px;
    display: block;
    width: 250px;
    margin: 70px auto 20px auto;
    border-radius: 10px;
    border-width: 3px;
    border-style: solid;
  }

  .error-page a:hover {
    color: #00cd8c;
    background: #FFF;
  }
</style>