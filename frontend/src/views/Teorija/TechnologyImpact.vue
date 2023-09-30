<template>
    <div class="main">
        <h1>Technology Impact</h1>
        <div class="text-container">
            <h2>Technological change </h2>
            <p>is the largest cause of long-term economic growth. Throughout human history, energy production was the main constraint on economic development, and new technologies allowed humans to significantly increase the amount of available energy.Technologies have contributed to human welfare through increased prosperity, improved comfort and quality of life, and medical progress, but they can also disrupt existing social hierarchies, cause pollution, and harm individuals or groups. </p>
            <div class="button-container">
                <router-link to="/technologyteorija"><button>Return</button></router-link>
            </div>
        </div>
    
    </div>
    </template>
    
    <script></script>
    
    <style scoped>
    
    h1{
        z-index: 1000;
        color: black;
    }
    .main{
        justify-content: center;
        align-content: center;
        display: flex;
    }
    .text-container{
        width: 100rem;
        height: 32rem;
        background-color: var(--secondary-color);
        position: absolute;
        top:10rem;
        color: white;
        padding: 1rem;
        word-spacing: 0.1rem;
        border-radius: 25px;
    }
    
    button{
        background-color: var(--accent-color-two) ;
        width: 8rem;
        height: 2rem;
        position: absolute;
        border-radius: 25px;
        color: white;
        transition: 0.1s; 
        top: 28rem;
    }
    
    button:hover{
        transform: scale(1.1);
      }
    
    </style>
    
    
 