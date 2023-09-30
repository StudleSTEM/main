
<template>
<main>
    <NavBar/>
        <div class="header-container">
            <h1>Engieneering Theory</h1>
        </div>
    <div class="list-container">
        <div class="card">
            <ul>
                <router-link to="/types-of-engineering"><li><a><h2>Types of engieneering</h2></a></li></router-link>
                <router-link to="/history-of-engineering"><li><a><h2>History of engieneering</h2></a></li></router-link>
                
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

button:hover{
    transform: scale(1.1);
  }
  .button-container{
    width: 40rem;
    height: 30rem;
    position: absolute;
    top: 26rem;
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

    .container{
        width: 100vw;
        height: 100vh;
    }
    .header-container{
        width: 100vw;
        height: 10vh;
        background-color: var(--secondary-color);
        padding-left: 5rem;
        padding-top:1.2rem;
    }

    .card{
        width: 40rem;
        height: 30rem;
        background-color: var(--secondary-color) ;
        border-radius: 25px;
        padding: 2rem;
    }

</style>