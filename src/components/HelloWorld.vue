<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <router-link to="/page1"> -->
      <button @click="to">跳转到page1</button>
    <!-- </router-link> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    to () {
      this.$router.push({ path: '/page1', query: { id: '123' } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
