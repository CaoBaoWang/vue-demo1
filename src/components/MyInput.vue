<template>
  <div>
    <input  type="text" v-bind:value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    value:String
  },
  mounted() {
    console.log(this.value);
  },
  methods:{
    onInput(e){
      console.log(e.target.value)
      // this.$emit('myInputEvent',e.target.value) // 不能使用v-model
      this.$emit('input',e.target.value)
    }
  }

}
</script>

<style scoped>

</style>
