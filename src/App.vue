<template>
  <div id="app">
    {{user }}
    {{'firstName=' +firstName}}
    <!--    <input type="text" v-model="user.username"/>-->
    <input type="text" :value="user.username" @input="user.username = $event.target.value" />
    <button @click="user.username = 'wslbtn'"  >username = wslbtn</button>

<!--    <my-input :value="firstName" @input="firstName = $event" />-->
    <my-input v-model="firstName" />


  </div>
</template>

<script>
import MyInput from "./components/MyInput";

export default {
  components: {
    MyInput
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
