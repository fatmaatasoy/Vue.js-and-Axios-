<template>
  <div class="hello">
   <router-link to="/about">About ||</router-link>
   <router-link :to="{name:'Panel'}"> Kontrol Noktosı</router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
