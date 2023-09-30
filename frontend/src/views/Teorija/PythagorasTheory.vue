<template>
    <div class="main">
        <h1>Pythagoras Theory</h1>
        <div class="text-container">
            <h2>Pythagoras Theorem</h2>
            <p>In mathematics, the Pythagorean theorem or Pythagoras' theorem is a fundamental relation in Euclidean geometry between the three sides of a right triangle. It states that the area of the square whose side is the hypotenuse (the side opposite the right angle) is equal to the sum of the areas of the squares on the other two sides.

The theorem can be written as an equation relating the lengths of the sides a, b and the hypotenuse c, sometimes called the Pythagorean equation: a&#178; + b&#178; = c&#178; </p>
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
    
    
 