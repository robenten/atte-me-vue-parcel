<template>
    <div id="button-counter">
        <button v-on:click="count++">You clicked me {{ count }} times.</button>
    </div>
</template>

<script>
export default {
  name: 'button-counter',
  data () {
    return {
      count: 0
    }
  }
}
</script>

<style lang="scss">
  #button-counter {
      button {
            background-color: orange;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
      }
  }
</style>