<template>
   <div>
       <router-link :to="{name: 'No1'}">No1 || </router-link>
       <router-link :to="{name: 'No2'}">No2</router-link>
    <router-view/>
   </div>
</template>
<script>
export default {
   
}
</script>