<template>
    <div class="main">
        <h1>History Of Engineering</h1>
        <div class="text-container">
            <h2>Engineering</h2> <p>has existed since ancient times, when humans devised inventions such as the wedge, lever, wheel and pulley, etc.

The term engineering is derived from the word engineer, which itself dates back to the 14th century when an engine'er (literally, one who builds or operates a siege engine) referred to "a constructor of military engines". In this context, now obsolete, an "engine" referred to a military machine, i.e., a mechanical contraption used in war (for example, a catapult). Notable examples of the obsolete usage which have survived to the present day are military engineering corps, e.g., the U.S. Army Corps of Engineers.

The word "engine" itself is of even older origin, ultimately deriving from the Latin ingenium (c. 1250), meaning "innate quality, especially mental power, hence a clever invention."

Later, as the design of civilian structures, such as bridges and buildings, matured as a technical discipline, the term civil engineering entered the lexicon as a way to distinguish between those specializing in the construction of such non-military projects and those involved in the discipline of military engineering.</p>
            <div class="button-container">
                <router-link to="/engeneeringteorija"><button>Return</button></router-link>
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
        position: relative;
        border-radius: 25px;
        color: white;
        transition: 0.1s; 
        top: 25rem;
    }
    
    button:hover{
        transform: scale(1.1);
      }
    
    </style>
    
    
