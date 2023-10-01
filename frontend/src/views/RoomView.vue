<template>
   <main>
     <p v-if="error">You are not in this classroom</p>
     <p v-else-if="loading">Loading...</p>
     <div v-else>
       <p>Room {{ result.getRoom.id }} - {{result.getRoom.name }}</p>
       <p>Owner: {{ result.getRoom.owner }}</p>
       <p>Users:</p>
       <ul>
         <li v-for="user in result.getRoom.users" :key="user.id">
           {{ user.username }} - Score: {{ user.score }}
         </li>
       </ul>
     </div>
   </main>
 </template>
 
 
 
 <script>
import { useQuery } from '@vue/apollo-composable';
import { GET_ROOM } from '../graphql/room';
import { useRoute } from 'vue-router';
import { computed } from 'vue'; // Import computed from Vue

export default {
  name: 'App',
  methods: {
   sort(data) {
      return [...data].sort((a, b) => b.score - a.score);
   }
  },
  setup() {
    const route = useRoute();
    const id = parseInt(route.params.roomid);

    const { result, loading, error } = useQuery(GET_ROOM, {
      id,
      accessToken: localStorage.getItem('access_token'),
    });

    // Computed property to sort users by score
    const sortedUsers = computed(() => {
      return [...result.getRoom.users].sort((a, b) => b.score - a.score);
    });

    return {
      id,
      result,
      error,
      loading,
      sortedUsers, // return the sortedUsers computed property
    };
  },
};
</script>

 <style scoped>

   main {
      margin-top: 100px;
   }
</style>