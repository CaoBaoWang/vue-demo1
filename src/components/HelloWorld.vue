<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
             rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
             rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank"
             rel="noopener">unit-jest</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
      </li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    let data = {
      name: 'wsl',
      age: '18',
      gender: '男'
    }

    let proxyData = proxy({data})

    function proxy({data}) {
      const _data = Object.assign({}, data)// 这里需要深拷贝

      Object.keys(data).forEach((key) => {
        Object.defineProperty(data, key, {
          get() {
            // TODO something
            console.log('监听原始对象 get')
            return _data[key]
          },
          set(value) {
            // TODO something
            console.log('监听原始对象 set')

            _data[key] = value
          }
        })
      })

      let obj = {}

      Object.keys(data).forEach((key) => {
        Object.defineProperty(obj, key, {
          get() {
            // TODO something
            console.log('监听代理对象 get')

            return _data [key]
          },
          set(value) {
            // TODO something
            console.log('监听代理对象 set')
            _data[key] = value
          }

        })
      })
      return obj
    }
    console.log('proxyData')
    console.log(data.name) // 监听原始对象 get   wsl
    console.log(proxyData.age) // 监听代理对象 get 18
    data.name ='w' // 监听原始对象 set
    proxyData.age = '19' // 监听代理对象 set

    console.log('proxyData')
    console.log(data.name) // 监听原始对象 get   w
    console.log(proxyData.age) // 监听代理对象 get 18

  },
  methods: {
    add() {

      const obj = {}
      Object.defineProperty(obj, "key", {

        get() {
          return 0;
        },
        set() {
        },
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
