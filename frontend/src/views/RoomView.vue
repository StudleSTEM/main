<template>
   <main>

      <p v-if="error">you are not in this classroom</p>
      <p v-if="loading">Loading...</p>
      <div v-else>

         <p>room {{ id }}</p>

         {{ result }}
      </div>

     
       
   </main>
 </template>

<script>
import { useQuery } from '@vue/apollo-composable'
import { GET_ROOM } from "../graphql/room";
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  setup () {

    const route = useRoute()

    let id = parseInt(route.params.roomid);

    const { result, loading, error } = useQuery(GET_ROOM, { id, accessToken: localStorage.getItem("access_token") } );
   
    return {
      id, result, error, loading
    }
  }
}

</script>

<style>
   main {
      margin-top: 200px;
   }
</style>