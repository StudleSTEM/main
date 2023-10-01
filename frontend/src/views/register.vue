<template>
  <div class="bg">
    <div class="company-name">
      <h1>StudleSTEM</h1>
    </div>
    <div class="reg-container">
      <h2 class="reg-heading">Register</h2>
      <form @submit.prevent="login" class="reg-form">
        <label for="email" class="reg-label">Email:</label>
        <input type="text" id="email" v-model="email" class="reg-input" />
        <label for="username" class="reg-label">Username:</label>
        <input type="text" id="username" v-model="username" class="reg-input" />
        <label for="password" class="reg-label">Password:</label>
        <input type="password" id="password" v-model="password" class="reg-input" />

        <label for="name" class="reg-label">Name:</label>
        <input type="text" id="name" v-model="name" class="reg-input" />

        <label for="lastname" class="reg-label">Lastname:</label>
        <input type="text" id="lastname" v-model="lastname" class="reg-input" />

        
        <button type="submit" class="reg-button" @click="login()">Register</button>
      </form>
      <button @click="goToLogin" class="login-button">Login</button>
    </div>

  </div>
</template>
  
<script>
import { REGISTER } from '../graphql/user';
import { useMutation } from '@vue/apollo-composable'
import { ref } from 'vue';
import { useRouter } from 'vue-router'

export default {
  methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  },
  setup() {
    const email = ref('');
    const username = ref('');
    const password = ref('');
    const role = 0;
    const name = ref('');
    const lastname = ref('');
    const school = "RVT";
    const klasse = "Klase";

    const router = useRouter();
    
    const { mutate: registerMutation } = useMutation(REGISTER);

    const register = async function() {
      console.log("registered");


      console.log(this.email);
      console.log(this.name);
      console.log(this.password);
      const { result, loading, error } = await registerMutation({
          email: this.email,
          username: this.username,
          password: this.password,
          role: this.role, 
          name: this.name,
          lastname: this.lastname,
          school: this.school,
          class: this.klasse,
      });

      if (error) {
        console.error(`An error occurred: ${error.message}`);
        return;
      }

      

      console.log(result);
      router.push('/login');
    }
    return { register, email, username, password, role, name, lastname, school, klasse };
  }
}

</script>
  
<style scoped>

.footer p {
  font-size: 14px;
}

.bg {
  padding-top: 150px;
  position: relative;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  height: 150vh;

  background-color: var(--accent-color);
}
.reg-container {
  background-color: #fcf9fb;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 35vw;
  margin: auto;
  margin-top: 100px;

  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
}

.reg-heading {
  color: #173744;
  text-align: center;
  margin-bottom: 20px;
}

.reg-form {
  display: flex;
  flex-direction: column;
}


.reg-label {
  color: #173744;
  margin-bottom: 5px;

}

.reg-input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #6dc6cb;
  
}

.reg-button {
  background-color: #b9e379;
  color: #173744;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.reg-button:hover {
  background-color: #6dc6cb;
}

.company-name {
  text-align: center;
}

.company-name h1 {
  color: #173744;
  font-size: 48px;
}


.login-button {
  text-decoration: underline;
  margin-top: 1vh;
}



</style>
