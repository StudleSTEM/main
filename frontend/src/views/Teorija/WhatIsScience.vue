<template>
    <div class="main">
        <h1>What is science?</h1>
        <div class="text-container">
            <h2>Science</h2>
            <p>is a rigorous, systematic endeavor that builds and organizes knowledge in the form of testable explanations and predictions about the world.</p>
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
    
    
 