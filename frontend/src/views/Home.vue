<template>
  <NavBar />
  <div class="main">
    <div class="intro">sdf</div>
  </div>
</template>

<script lang="ts" setup>
  import NavBar from '../components/NavBar.vue';
</script>

<style scoped>

.main {
  margin-top: 150px;
  
  position: relative;
  justify-content: center;
  align-content: center;
  display: flex;
}

.intro {
  border: 1px solid black;
  border-radius: 50px;
  height: auto;
  width: 50rem;
}

</style>

