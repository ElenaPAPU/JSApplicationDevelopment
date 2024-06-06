<template>
  <div>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld id=123 msg="Welcome to Your Vue.js App"/>
  <HelloWorld msg="Welcome to Your Vue.js App1"/>
  <HelloWorld msg="Welcome to Your Vue.js App2"/>
  <HelloWorld msg="Welcome to Your Vue.js App3"/>
  <HelloWorld msg="Welcome to Your Vue.js App4"/>
  <h1>Mesaj APP</h1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
