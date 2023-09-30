<template>
    <div class="main">
        <div class="text-container">
            <h2>Technology Impact </h2>
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
    
    
 