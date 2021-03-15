<template>
  <div class="home">
    İD Number:{{ this.$route.params.id }}
    <ul >
      <li>{{ datalist.name }}</li>
      <li>@{{ datalist.username }}</li>
      <li>{{ datalist.phone }}</li>
      
    </ul><router-link :to="{name:'Posts' }">Posts</router-link>
   
      <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      users: `users/${this.$route.params.id}`,
      datalist:{},
    };
  },
  methods: {
    ...mapActions(["ActionUser"]),
    data() {
      this.ActionUser(this.users).then((res) => {
        this.datalist=res.data;
        console.log(this.datalist);
      });
    },
   
  },

  created() {
    this.data();
  },
};
</script>
