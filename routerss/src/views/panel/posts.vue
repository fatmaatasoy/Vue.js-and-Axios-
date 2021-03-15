<template>
  <div>
    <div v-for="post in postsData" :key="post.title"> 
      <h2>{{post.id}}-{{post.title}}</h2>
      <p>{{post.body}}</p>

    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data(){
    return{
      idUrl:`users/${this.$route.params.id}/posts`,
      postsData:{}
    }
  },
  methods: {
    ...mapActions(["ActionUser"]),
  
  setPost() {
   this.ActionUser(this.idUrl).then(res=>{
     this.postsData=res.data
     console.log(this.postsData);
   })
  },
  },
  
  created() {
   this.setPost();
}
}
</script>

<style></style>
