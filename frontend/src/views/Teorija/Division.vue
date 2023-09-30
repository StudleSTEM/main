<template>
    <div class="main">
        <h1>Division</h1>
        <div class="text-container">
            <h2>Division</h2>
            <p>is one of the four basic operations of arithmetic. The simplest way of viewing division is in terms of quotition and partition: from the quotition perspective, 20 / 5 means the number of 5s that must be added to get 20. In terms of partition, 20 / 5 means the size of each of 5 parts into which a set of size 20 is divided. For example, 20 apples divide into five groups of four apples, meaning that "twenty divided by five is equal to four". </p>
            <div class="button-container">
                <router-link to="/mathematicsteorija"><button>Return</button></router-link>
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
    
    
 