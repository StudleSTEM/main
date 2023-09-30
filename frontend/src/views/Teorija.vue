<template>
     <div class="card-container">
         <div class="card science">
          <h2>Science</h2>
            <div class="button-container">
              <router-link to="/scienceteorija"> <button id="s-button"><p>Start</p></button></router-link>
            </div>
         </div>
         <div class="card technology"> 
          <h2>Technology</h2>
            <div class="button-container">
              <router-link to="/technologyteorija"><button id="t-button"><p>Start</p></button></router-link>
            </div>
         </div>
         <div class="card engineering">
          <h2>Engineering</h2>
            <div class="button-container">
              <router-link to="/engeneeringteorija"><button id="e-button"><p>Start</p></button></router-link>
            </div>
         </div>
         <div class="card mathematics">
          <h2>Mathematics</h2>
            <div class="button-container">
              <router-link to="/mathematicsteorija"><button id="m-button"><p>Start</p></button></router-link>
            </div>
         </div>
     </div>
 </template>
 
 
 <style scoped>

    h2{
      height: 5rem;
      left: 2rem;
      position: relative;
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
}
  .card{
    border-radius: 25px;
  }

  button:hover{
    transform: scale(1.1);
  }
  
.button-container{
  width: 20rem;
  height: 20rem;
  position: relative;
  justify-content: center;
  align-content: center;
  display: flex;
  top: 27rem;
  left: -3.5rem;
}


 
 @media only screen and (min-width: 1280px)  {
     

     .card-container{
         display: flex;
         justify-content: center;
         align-content: center;
         flex-direction: row;
         position: relative;
         top: 10rem;
     }
     .card{
         width: 20rem;
         height: 30rem;
         background-color: var(--secondary-color);
         display: inline-flex;
         margin: 1rem;
         position: relative;
         color: white;
     }
 }
     @media only screen and (min-width: 992px){
     .card-container{
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
         align-content: center;
         flex-direction: row;
         position: relative;
         top: 10rem;
     }
     .card{
         width: 20rem;
         height: 30rem;
         background-color: var(--secondary-color);
         display: inline-flex;
         margin: 1rem;
         position: relative;
         color: white;         
     }

 
 }
 
 
    @media only screen and (min-width: 768px){
 
     .card-container{
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
         align-content: center;
         flex-direction: row;
         position: relative;
         top: 10rem;
     }
     .card{
         width: 20rem;
         height: 30rem;
         background-color: var(--secondary-color);
         display: inline-flex;
         margin: 1rem;
         position: relative;
         color: white;
     }

 
     }
 
 
    @media only screen and (min-width: 480px){
 
     .card-container{
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
         align-content: center;
         flex-direction: row;
         position: relative;
         top: 10rem;
     }
     .card{
         width: 20rem;
         height: 30rem;
         background-color: var(--secondary-color);
         display: inline-flex;
         margin: 1rem;
         position: relative;
         color: white;
         z-index: 1;
     }

 
     } 
 
 </style>