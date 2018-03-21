<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <router-link to="/page1/bar"> -->
      <button @click="toBar">bar</button>
    <!-- </router-link> -->
    <router-link to="/page1/foo">
      <button>foo</button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      msg: 'this is page1'
    }
  },
  mounted () {
    console.log(location.href)
  },
  methods: {
    toBar () {
      this.$router.push({ path: '/page1/bar', query: { name: 'xm', age: 20 } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
button {
  margin-bottom: 20px;
}
</style>
