<template>
  <div class="bg">
    <div class="company-name">
      <h1>StudleSTEM</h1>
    </div>
    <div class="login-container">
      <h2 class="login-heading">Login</h2>
      <form @submit.prevent="login" class="login-form">
        <label for="email" class="login-label">Email:</label>
        <input type="text" id="email" v-model="email" class="login-input" />
        <label for="password" class="login-label">Password:</label>
        <input type="password" id="password" v-model="password" class="login-input" />
        <button type="submit" class="login-button" @click="login()">Login</button>
      </form>
      <button @click="goToRegister" class="register-button">Register</button>
    </div>

  </div>
</template>

<script>


import { LOGIN } from '../graphql/user';
import { useMutation } from '@vue/apollo-composable'
import { ref } from 'vue';
import { useRouter } from 'vue-router'

export default {
  methods: {
    goToRegister() {
      this.$router.push('/register');
    }
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const { mutate: loginMutation } = useMutation(LOGIN);

    const login = async function() {

      await loginMutation({
        email: this.email,
        password: this.password,
      }).then(({ data, loading, error}) => {
        if (error) {
          console.error(`Err: ${error.message}`);
          return;
        }

        localStorage.setItem("access_token", data.login.accessToken);
        localStorage.setItem("refresh_token", data.login.refreshToken);

        router.push('/');
        console.log(data);
      });
    }
    return { login, email, password };
  }
}

</script>
  
<style scoped>


.footer p {
  font-size: 14px;
}

.bg {
  position: relative;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh;

  background-color: var(--accent-color);
}
.login-container {
  background-color: #fcf9fb;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;

  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
}

.login-heading {
  color: #173744;
  text-align: center;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-label {
  color: #173744;
  margin-bottom: 5px;
}

.login-input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #6dc6cb;
}

.login-button {
  background-color: #b9e379;
  color: #173744;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.login-button:hover {
  background-color: #6dc6cb;
}

.company-name {
  text-align: center;
  margin-top: 100px;
}

.company-name h1 {

  color: #173744;
  font-size: 48px;
}

.register-button {
  margin-top: 1vh;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  text-decoration: underline;
}

</style>
  