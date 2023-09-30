<script lang="ts">

</script>

<template>
<main>
    <NavBar/>
        <div class="header-container">
            <h1>Mathematical Theory</h1>
        </div>
    <div class="list-container">
        <div class="card">
            <ul>
                <div class="good">
                    <router-link to="/division"><li><a><h2>Division</h2></a></li></router-link>
                </div>
                <div class="good2">
                    <router-link to="/pythagoras-theory"><li><a><h2>Pythagoras Theory</h2></a></li></router-link>
                </div>
            </ul>
            <div class="button-container">
        <router-link to="/teorija"><button>Return</button></router-link>
    </div>
        </div>
    </div>


</main>
</template>

<style scoped>

h1,h2{
        color: white;
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




.header-container{
        width: 100vw;
        height: 10vh;
        background-color: var(--secondary-color);
        padding-left: 5rem;
        padding-top:1.2rem;
    }

.list-container{
        display: flex;
        position: relative;
        width: 100vw;
        height: 100vh;
        top: 5rem;
        justify-content: center;
        align-content: center;
        
    }

    .good{
    width: 20rem;
    height: 3rem;
    border: 1px solid var(--accent-color);
    border-radius: 0.3rem;
    margin: 2rem;
  }
  .good2{
    width: 20rem;
    height: 3rem;
    border: 1px solid var(--accent-color);
    border-radius: 0.3rem;
    margin: 2rem;
  }
  .container{
        width: 100vw;
        height: 100vh;
    }
    .card{
        width: 80vw;
        height: 80vh;
        background-color: var(--secondary-color) ;
        border-radius: 25px;
        padding: 2rem;
    }

button:hover{
    transform: scale(1.1);
  }


</style>