<template>
  <div class="themed-images">
     <div class="card-container">
         <div class="card science">
          <h2>Science</h2>
          <h3>Tasks</h3>
            <div class="button-container" id="sciencecard">
              <router-link to="/science-tasks"> <button id="s-button"><p>Start</p></button></router-link>
            </div>
         </div>
         <div class="card technology" id="techcard"> 
          <h2>Technology</h2>
          <h3>Tasks</h3>
            <div class="button-container">
              <router-link to="/technology-tasks"><button id="t-button"><p>Start</p></button></router-link>
            </div>
         </div>
         <div class="card engineering" id="engineer">
          <h2>Engineering</h2>
          <h3>Tasks</h3>
            <div class="button-container">
              <router-link to="/engineering-tasks"><button id="e-button"><p>Start</p></button></router-link>
            </div>
         </div>
         <div class="card mathematics" id="math">
          <h2>Mathematics</h2>
          <h3>Tasks</h3>
            <div class="button-container">
              <router-link to="/mathematics-tasks"><button id="m-button"><p>Start</p></button></router-link>
            </div>
         </div>
     </div>
    </div>
 </template>
 
 <script lang="ts">
</script>
 
 <style scoped>



    h2{
      height: 5rem;
      font-size: 2rem;
      position: relative;
      top: 12rem;
    }

    h3{
      height: 2rem;
      font-size: 2rem;
      position: relative;
      top: 16rem;
      color: var(--accent-color);
    }
    

    body{
      background-color: var(--accent-color);
    }

    a{
      text-decoration: none;
    }
    .science{
      background-image: url('../assets/scientist.jpg') ;
      background-size: cover;
      filter: brightness(50%);
    }

    .science:hover{
      transform: scale(1.02);
      filter: brightness(100%);
    }

    .technology{
      background-image:url('../assets/technology_blueprints.jpg');
      background-size: cover ;
      filter: brightness(50%);
    }

    .technology:hover{
      transform: scale(1.02);
      filter: brightness(100%);
    }

    .engineering{
      background-image: url('../assets/engineering.jpg');
      background-size: cover;
      filter: brightness(50%);
    }

    .engineering:hover{
      transform: scale(1.02);
      filter: brightness(100%);
    }

    .mathematics{
      background-image:url('../assets/mathematical_equations.jpg');
      background-size: cover;
      filter: brightness(50%);
    }

    .mathematics:hover{
      transform: scale(1.02);
      filter: brightness(100%);
    }


    .themed-images{
      width: 100vw;
      height: 100vh;
    }
    img{
      position: relative;
      width: 30rem;
      height: 50rem;
      display: inline-block;
      transition: 0.5s;
    }


  body,html{
    background-color: var(--background-color);
  }

  button{
    background-color: var(--accent-color-two) ;
    width: 8rem;
    height: 2rem;
    position: relative;
    border-radius: 25px;
    color: white;
    transition: 0.1s;
    display: none;
    font-size: 1.5rem; 
    text-decoration: none;
}
  .card{
    border-radius: 25px;
    margin: 2rem;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-content: center;
    color: var(--accent-color);
  }

  .card:hover button{
    display: block;
    color: var(--accent-color);
  }

  .card:hover h2{
    color: white;
  }
  .card:hover h3{
    color: white;
  }

  button:hover{
    transform: scale(1.1);
  }
  
.button-container{
  width: 20rem;
  height: 20rem;
  position: absolute;
  justify-content: center;
  align-content: center;
  display: flex;
  top: 27rem;
}

.card-container{
  left: 10rem;
}


 
 @media only screen and (min-width: 1280px)  {
     
  .themed-images{
      background-color: var(--accent-color);
      height: 100vh;
      width: 100vw;
    }

     .card-container{
         display: flex;
         justify-content: center;
         align-content: center;
         flex-direction: row;
         position: absolute;
         top: 10rem;
         left: 16.5rem;
     }
     .card{
         width: 20rem;
         height: 30rem;
         background-color: var(--secondary-color);
         display: inline-flex;
         margin: 1rem;
         position: relative;
     }


 }
     @media only screen and (min-width: 992px){
     .card-container{
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
         align-content: center;
         flex-direction: row;
         top: 10rem;
     }
     .card{
         width: 20rem;
         height: 30rem;
         background-color: var(--secondary-color);
         display: inline-flex;
         margin: 1rem;        
     }

 
 }
 
 
    @media only screen and (min-width: 768px){
 
     .card-container{
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
         align-content: center;
         flex-direction: row;
         top: 10rem;
         left: 0rem;
         position: relative;
     }
     .card{
         width: 20rem;
         height: 30rem;
         background-color: var(--secondary-color);
         display: inline-flex;
         margin: 1rem;
         position: relative;
     }


 
     }
 
 
    @media only screen and (min-width: 480px){
 
     .card-container{
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
         align-content: center;
         flex-direction: row;
         top: 10rem;
     }
     .card{
         width: 20rem;
         height: 30rem;
         background-color: var(--secondary-color);
         display: inline-flex;
         margin: 1rem;
         position: relative;
     }

 
} 
 
 </style>