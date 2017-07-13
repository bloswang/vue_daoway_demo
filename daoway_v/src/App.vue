<template>
  <router-view :servers="servers"></router-view>
</template>

<script>
  import axios from "axios"
  export default {
    data(){
      return {
        servers:[]
      }
    },
    created() {
      axios.get("/api/server")
        .then((response) => {
          const result = response.data
          const msg = result.data
          this.servers = msg.servers
        })
    }
  }
</script>

<style>

</style>
