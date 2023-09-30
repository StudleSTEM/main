<script lang="ts" setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
    <div id="container">
        <div id="buttons-container">
            <router-link to="/teorija" id="button" class="weight-regular height-regular">Teorija</router-link>
            <router-link to="/uzdevumi" id="button" class="weight-regular height-regular">Uzdevumi</router-link>
            <router-link to="/testi" id="button" class="weight-regular height-regular">Testi</router-link>
            <router-link to="/profils" id="button" class="weight-regular height-regular">Profils</router-link>
        </div>
    </div>
</template>

<style scoped>
    #container{
        min-height: 3rem;
        height: 10vh;
        width: 100vw;

        position: fixed;
        top: 0;

        display: flex;
        justify-content: left;
        align-items: center;
        background: var(--secondary-color);
        
    }

    #buttons-container{
        display: flex;
        justify-content: center;
        align-items: center;

        height: 10vh;
        width: 50vw;
        min-width: 10rem;

    }

    #button{
        padding: 0 1.25rem 0;
        height: auto;
        width: auto;

        position: relative;

        color: var(--accent-color);
        text-decoration: none;
    }

</style>