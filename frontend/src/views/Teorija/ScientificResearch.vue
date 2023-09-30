<template>
    <div class="main">
        <h1>Scientific research</h1>
        <div class="text-container">
            <h2>Scientific Research</h2>
            <p>Scientific research can be labeled as either basic or applied research. Basic research is the search for knowledge and applied research is the search for solutions to practical problems using this knowledge. Most understanding comes from basic research, though sometimes applied research targets specific practical problems. This leads to technological advances that were not previously imaginable.</p>
            <div class="button-container">
                <router-link to="/scienceteorija"><button>Return</button></router-link>
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
    
    
 