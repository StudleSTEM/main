<template>
  <div class="container">
    <div class="intro">
      <h1>
        Interactive Introduction to STEM
      </h1>

      <div class="introtext">
        Introducing StoodleSTEM, the ultimate online destination for all your STEM learning needs! With a user-friendly interface and a vast array of resources, StoodleSTEM is the perfect platform for students, teachers, and parents alike. Whether you're looking for interactive lessons, engaging activities, or informative articles, StoodleSTEM has got you covered. With a focus on science, technology, engineering, and mathematics, StoodleSTEM is the perfect tool to help you excel in your studies and achieve your academic goals. So why wait? Sign up today and join the StoodleSTEM community!      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>


.container {
  
  position: relative;
  padding-top: 300px;
  bottom: 0;
  justify-content: center;
  align-content: center;
  display: flex;
  height: 105vh;
  
  background-image: url("../assets/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}



.intro {
  border: 2px solid black;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  height: auto; 
  width: 80rem;

  padding-top: 1rem;
  padding-bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 1), 0px 2px 100px rgba(0, 0, 0, 1);

  background-color: var(--background-color);
}

h1 {
  margin: 3rem;
  font-size: 50px;
  border-bottom: 1px solid black;
}

.introtext {
  font-size: 20px;
  margin: 3rem;
  margin-top: 0.5rem;

}

@media only screen and (max-width: 500px) {
  
.intro {
  height: 120%;
  width: 100vw;
  border-radius: 0;
  border: none;
  box-shadow: none;
}

.container {
  background-image: none;
  padding-top: 100px;
}

}



</style>

