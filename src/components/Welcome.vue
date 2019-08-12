<template>
  <div id="welcome">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  }
}
</script>

<style lang="scss">
  #welcome {
    color: #56b983;
  }
</style>