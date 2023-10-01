<template>
  <NavBar />
  <router-view class="klas" />
  <Footer />
</template>

<script lang="ts" setup>
  import Footer from './components/Footer.vue'
  import NavBar from './components/NavBar.vue';
</script>


<style lang="scss">
@import 'styles/styles.scss';




</style>