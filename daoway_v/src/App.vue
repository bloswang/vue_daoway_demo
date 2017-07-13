<template>
  <router-view :servers="servers" :server="server" :massage="massage"></router-view>
</template>

<script>
  import axios from "axios"
  export default {
    data(){
      return {
        servers:[],
        server:[]
      }
    },
    created() {
      axios.get("/api/server")
        .then((response) => {
          const result = response.data
          const msg = result.data
          this.servers = msg.servers
        })
    },
    methods:{
        massage (data) {
            this.server=data
            console.log(this.server)
        }
    }
  }
</script>

<style>

</style>
