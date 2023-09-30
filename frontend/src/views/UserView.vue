<template>
   <main>
      <p v-if="error">Something went wrong... {{ error.message }}</p>
      <p v-if="loading">Loading...</p>
      <p v-else>
         {{ id }}
      {{ result }}
     
      </p>


     
       
   </main>
 </template>

<script>
import { useQuery } from '@vue/apollo-composable'
import { GET_USER } from "../graphql/user";
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  setup () {

    const route = useRoute()

    let id = parseInt(route.params.userid);

    const { result, loading, error } = useQuery(GET_USER, { id });
   
    return {
      id, result, error, loading
    }
  }
}

</script>

<style>
  
</style>