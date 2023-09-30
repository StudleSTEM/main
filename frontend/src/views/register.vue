<template>
    <div class="bg">
      <div class="company-name">
        <h1>StudleSTEM</h1>
      </div>
      <div class="login-container">
        <h2 class="login-heading">Register</h2>
        <form @submit.prevent="register" class="login-form">
          <div class="login-radio">
            <div
              class="radio-option"
              :class="{ 'radio-option-active': userType === 'teacher' }"
              @click="toggleUserType('teacher')"
            >
              <label class="radio-label">Teacher</label>
            </div>
            <div
              class="radio-option"
              :class="{ 'radio-option-active': userType === 'student' }"
              @click="toggleUserType('student')"
            >
              <label class="radio-label">Student</label>
            </div>
          </div>
          <label for="username" class="login-label">Username:</label>
          <input type="text" id="username" v-model="username" class="login-input" />
          <label for="email" class="login-label">Email:</label>
          <input type="email" id="email" v-model="email" class="login-input" />
          <label for="password" class="login-label">Password:</label>
          <input type="password" id="password" v-model="password" class="login-input" />
          <button type="submit" class="login-button">Register</button>
        </form>
        <button @click="goToLogin" class="loginn-button">Login instead</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userType: 'teacher', // Default to teacher
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      toggleUserType(type) {
        // Toggle user type
        this.userType = this.userType === type ? null : type;
      },
      register() {
        // Handle registration logic here
        console.log('Registered as:', this.userType);
        console.log('Username:', this.username);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
      },
      goToLogin() {
        this.$router.push('/login');
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
  
  .login-radio {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  .radio-option {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 10px;
    margin: 0 10px;
    border: 2px solid #6dc6cb;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .radio-option:hover {
    background-color: #f0f0f0;
  }
  
  .radio-option-active {
    border-color: #6dc6cb;
    background-color: #4a90e2;
    color: #fff;
  }
  
  .radio-option-active:hover {
    background-color: #4a90e2;
  }
  
  .radio-label {
    pointer-events: none;
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
  