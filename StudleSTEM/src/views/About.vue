<template>
    <NavBar />
    <div class="parent">
        <div class="container">
            <div class="header">
                <H1>About Us</H1>
            </div>
            <p>Introducing StoodleSTEM, the ultimate online destination for all your STEM learning needs! With a user-friendly interface and a vast array of resources, StoodleSTEM is the perfect platform for students, teachers, and parents alike. Whether you're looking for interactive lessons, engaging activities, or informative articles, StoodleSTEM has got you covered. With a focus on science, technology, engineering, and mathematics, StoodleSTEM is the perfect tool to help you excel in your studies and achieve your academic goals. So why wait? Sign up today and join the StoodleSTEM community!</p>
        </div>
    </div>
    </template>
    
    <script lang="ts" setup>
        import NavBar from '../components/NavBar.vue';
    </script>
    
    <style scoped>
            h1{
                font-size: 3.5rem;
                color: var(--secondary-color);
            }
    
            p{
                color: var(--secondary-color);
                font-size:1.5rem ;
                width: 80vw;
            }
    
            
            .parent{
                display: flex;
                justify-content: center;
                align-content: center;
                position: relative;
                top: 16rem;
            }
            .container{
                width: 100vw;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
    
            .header{
                width: 80rem;
                display: flex;
                justify-content: center;
                align-content: center;
            }
    
    
    </style>