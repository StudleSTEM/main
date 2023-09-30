<template>
  <div class="bg">
    <div class="company-name">
      <h1>StudleSTEM</h1>
    </div>
    <div class="login-container">
      <h2 class="login-heading">Login</h2>
      <form @submit.prevent="login" class="login-form">
        <label for="username" class="login-label">Username:</label>
        <input type="text" id="username" v-model="username" class="login-input" />
        <label for="password" class="login-label">Password:</label>
        <input type="password" id="password" v-model="password" class="login-input" />
        <button type="submit" class="login-button">Login</button>
      </form>
      <button @click="goToRegister" class="register-button">Register instead</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log('Logged in:', this.username);
    },
    goToRegister() {
      this.$router.push('/register');
    }
  }
};
</script>
  
  <style scoped>


.footer p {
  font-size: 14px;
}

  .bg {
    background-color: #6dc6cb;
  }
  .login-container {
    background-color: #fcf9fb;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    margin: auto;
    margin-top: 100px;
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
    margin-top: 50px;
  }
  
  .company-name h1 {
    color: #173744;
    font-size: 48px;
  }
  </style>
  