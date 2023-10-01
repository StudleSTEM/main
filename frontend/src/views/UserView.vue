<template>
   <p v-if="error">{{error}}</p>
   <p v-if="loading">Loading...</p>
   <div v-else>

    <div class="profile">
      <div class="profile-photo">
        <img :src="result.getUser.avatarUrl" alt="Profile Photo">
      </div>
      <div class="info">
        <div class="info-item">
          <strong>Name:</strong>
          <span >{{ result.getUser.name }}</span>
        </div>
        <div class="info-item">
          <strong>Grade:</strong>
          <span >{{ result.getUser.class }}</span>
        </div>
        <div class="info-item">
          <strong>School:</strong>
          <span >{{ result.getUser.school }}</span>
        </div>
        <div class="info-item">
          <strong>Email:</strong>
          <span >{{ result.getUser.email }}</span>
        </div>
      </div>
    </div>
    <div>
      achievments:

      <ul>
        <li v-for="achievment in result.getUser.achievments" v-bind:key="achievment.id">
          {{ achievment.title }}:
          {{ achievment.description }}
        </li>
      </ul>

    </div>
  </div>
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

<style scoped>
.profile {
  margin-top: 250px;

  display: flex;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f0f8ff; /* Light blue background */
}

.profile .profile-photo {
  margin-right: 20px;
}

.profile .profile-photo img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
}

.profile .profile-photo input[type="file"] {
  display: none;
}

.profile .info {
  flex: 1;
}

.profile .info-item {
  margin-bottom: 10px;
}

.profile .grades {
  flex: 1;
}

.profile .grades h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.profile .grades ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.profile .grades li {
  margin-bottom: 5px;
}

.profile strong {
  font-weight: bold;
  margin-right: 5px;
}

.profile button {
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 1em;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #008000; /* Зелёный цвет */
  color: #fff; /* Белый текст */
}

.profile button:hover {
  background-color: #006400; /* Темно-зелёный при наведении */
}

.profile button:focus {
  outline: none;
}

.profile .info-item input {
  border: 1px solid #ccc; /* Стандартная рамка */
  padding: 5px;
  width: 100%; /* Заполнение всей доступной ширины */
}

.profile .info-item input:focus {
  border: 1px solid #008000; /* Зелёная рамка при активации поля */
}

.profile .info-item input::placeholder {
  color: #ccc; /* Цвет placeholder */
}

.profile button {
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 1em;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #008000; /* Зелёный цвет */
  color: #fff; /* Белый текст */
}

.profile button:hover {
  background-color: #006400; /* Темно-зелёный при наведении */
}

.profile button:focus {
  outline: none;
}
</style>
