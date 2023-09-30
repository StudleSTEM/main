<template>
<div class="main">
    <h1>Types Of Engineering</h1>
    <div class="text-container">
        <h2>Chemical engineering</h2> <p>is the application of physics, chemistry, biology, and engineering principles in order to carry out chemical processes on a commercial scale, such as the manufacture of commodity chemicals, specialty chemicals, petroleum refining, microfabrication, fermentation, and biomolecule production. </p>
        <h2>Civil engineering</h2><p>is the design and construction of public and private works, such as infrastructure (airports, roads, railways, water supply, and treatment etc.), bridges, tunnels, dams, and buildings. Civil engineering is traditionally broken into a number of sub-disciplines, including structural engineering, environmental engineering, and surveying. It is traditionally considered to be separate from military engineering.</p>
        <h2>Electrical engineering</h2><p> is the design, study, and manufacture of various electrical and electronic systems, such as broadcast engineering, electrical circuits, generators, motors, electromagnetic/electromechanical devices, electronic devices, electronic circuits, optical fibers, optoelectronic devices, computer systems, telecommunications, instrumentation, control systems, and electronics.</p>
        <h2>Mechanical engineering </h2><p> is the design and manufacture of physical or mechanical systems, such as power and energy systems, aerospace/aircraft products, weapon systems, transportation products, engines, compressors, powertrains, kinematic chains, vacuum technology, vibration isolation equipment, manufacturing, robotics, turbines, audio equipments, and mechatronics. </p>
        <h2>Bioengineering</h2><p> is the engineering of biological systems for a useful purpose. Examples of bioengineering research include bacteria engineered to produce chemicals, new medical imaging technology, portable and rapid disease diagnostic devices, prosthetics, biopharmaceuticals, and tissue-engineered organs. </p>
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
    top: 9rem;
}

button:hover{
    transform: scale(1.1);
  }

</style>

