<template>
  <div id="app">
    <div id="nav">
      <HelloWorld />
    </div>
    <router-view/>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld'
export default {
  components:{
    HelloWorld
  }
}
</script>
