<script lang="ts" setup>
  
</script>

<template>
    <div class="task-container">
        <div class="task-box">
            <h1>Interactive Mathematics Tests</h1>
            <ul>
                <li><a><h2>Test 1</h2></a></li>
            </ul>
        </div>
    </div>
</template>


<style scoped>

    h1{
        height: 6vh;
        width: 25vw;
    }

    ul{
        height: 6vh;
        width: 25vw;
        position: relative;
    }
    .task-container{
        width: 100vw;
        height: 96vh;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .task-box{
        position: relative;
        width: 60vw;
        height: 45vh;
        background-color: var(--accent-color);
        top: 10vh;
        left: 0rem;
        padding: 2rem;
        border-radius: 2rem;
        border: 0.2rem solid var(--secondary-color);
        color: white;
    }
    
           /* Media Query for Mobile Devices */
           @media (max-width: 480px) {
            ul{
                top: 5.3rem;
            }
        }
          
        /* Media Query for low resolution  Tablets, Ipads */
        @media (min-width: 481px) and (max-width: 767px) {
            ul{
                top: 5.3rem;
            }
        }
          
        /* Media Query for Tablets Ipads portrait mode */
        @media (min-width: 768px) and (max-width: 1024px){
            ul{
                top: 5.3rem;
            }
        }
          
        /* Media Query for Laptops and Desktops */
        @media (min-width: 1025px) and (max-width: 1280px){
            ul{
                top: 3.5rem;
            }
        }
          
        /* Media Query for Large screens */
        @media (min-width: 1281px) {
            ul{
                top: 2rem;
            }
        }
    

</style>