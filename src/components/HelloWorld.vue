<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <router-link to="/page1"> -->
      <button @click="to">跳转到page1</button>
    <!-- </router-link> -->
    <button @click="show = !show">动画</button>
    <transition name="slide">
      <div class="squa" v-if="show"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true
    }
  },
  methods: {
    to () {
      this.$router.push({ name: 'page1', query: { id: '123', name: 'alice' } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
.squa {
  width: 100px;
  height: 100px;
  border: 1px solid #333;
  background-color: antiquewhite;
}
.slide-enter-active, .slide-leave-active {
  /* transition: all 1.1s; */
  animation: scal 1s;
}
/* .slide-enter, .slide-leave {
  transform: rotate(7200deg);
} */
@keyframes scal {
  0% {
    transform: scale(0);
  }
  66% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
