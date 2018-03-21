<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/bar">
      <button>bar</button>
    </router-link>
    <router-link to="/foo">
      <button>foo</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      msg: 'this is page1'
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
