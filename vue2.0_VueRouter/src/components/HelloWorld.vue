<template>
  <div class="hello">
    HelloWorld：
    <ul>
      <li><router-link to="/hello/hello1">H1</router-link></li>
      <li><router-link to="/hello/hello2">H2</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
