<template>
  <footer class="green-back">
    © All Rights Reserved. Course Ground {{currentYear}}
  </footer>
</template>

<script>
export default {
  data: function() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
  footer {
    width: 100%;
    text-align: center;
    padding: 10px 0;
    font-size: 18px;
    color: #FFF;
  }
</style>