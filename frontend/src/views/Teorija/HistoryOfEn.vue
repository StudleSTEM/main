<template>
    <div class="main">
        <div class="text-container">
            <h2>History Of Engineering</h2>
            <p>has existed since ancient times, when humans devised inventions such as the wedge, lever, wheel and pulley, etc.

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
        width: 80vw;
        height: 70vh;
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
    }
    
    button:hover{
        transform: scale(1.1);
      }

        /* Media Query for Mobile Devices */
        @media (max-width: 480px) {
            button{
                top:26rem ;
            }
        }
          
        /* Media Query for low resolution  Tablets, Ipads */
        @media (min-width: 481px) and (max-width: 767px) {
            button{
                top:28rem;
            }
        }
          
        /* Media Query for Tablets Ipads portrait mode */
        @media (min-width: 768px) and (max-width: 1024px){
            button{
                top: 30rem ;
            }
        }
          
        /* Media Query for Laptops and Desktops */
        @media (min-width: 1025px) and (max-width: 1280px){
            button{
                top: 36rem ;
            }
        }
          
        /* Media Query for Large screens */
        @media (min-width: 1281px) {
            button{
                top: 38rem;
            }
        }
    
    </style>
    
    
