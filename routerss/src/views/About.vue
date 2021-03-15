<template>
  <div class="about">
    <div v-for="user in dataUser" :key="user.name">
      <router-link :to="{ name: 'Home', params: { id: user.id } }">
        <div>
          <h4>{{ user.id }}--{{ user.name }} @{{ user.username }}</h4>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      dataUser: {},
    };
  },
  computed: {
    ...mapState(["users"]),
  },
  methods: {
    ...mapActions(["ActionUser"]),
    data() {
      this.ActionUser("users").then((res) => {
        this.dataUser = res.data;
        console.log(this.dataUser);
      });
    },
  },
 
  //  beforeRouteEnter  (to,from,next) {
  //     // const answer = window.confirm('Do you really want to leave? you have unsaved changes!' `${from}`)
  //     // if (!answer) return false
  //     let answer = confirm(`Emin misin buraya 'a gidiyorsun`)
  //     if(answer) {
  //       next()
  //       return
  //     }else{
  //       next(false)
  //     }
  //   },

  created() {
    this.data();
  },
};
</script>
