<template>
  <div id="app">

      <login></login>

  </div>
</template>

<script>
import Login from './components/Login.vue'

export default {
  components: {
    Login,
  },
  data (){
    return {
      firstName : 'w',
      user :{
        username:'wsl'
      }
    }
  },

  name: 'App',

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
