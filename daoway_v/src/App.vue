<template>
  <router-view :servers="servers"
               :server="server"
               :sellerCommentData="sellerCommentData"
               :sellers="sellers"
               :seller2="seller2"
                ></router-view>
</template>

<script>
  import axios from "axios"
  export default {
    data(){
      return {
        servers:[],
        sellers:[],
        server:[],
        seller2:{}
      }
    },
    created() {
      axios.get("/api/server")
        .then((response) => {
          const result = response.data
          const msg = result.data
          this.servers = msg.servers
        })
      axios.get("/api/seller")
        .then((response) =>{
          const result = response.data
          const msg = result.data
          this.sellers = msg.sellers
        })
    },
    methods:{
      sellerCommentData(data){
        this.seller=data.server_list
        this.seller2 = data
        console.log(this.seller2)
      }
    }
  }
</script>

<style>

</style>
