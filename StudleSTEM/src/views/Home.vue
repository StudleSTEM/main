<template>
  <NavBar />
  <div id="main">
    <h1>Home</h1>
    <div class="buttons-container">
      <router-link to="/teorija" class="main-button">
        <div class="letter">S</div>
        <p class="description">Teorija: Teorijā tu atradīsi visu nepieciešamo informāciju par konkrēto tēmu, kas būs nepieciešama testā. Šeit aprakstīti pamatjēdzieni, fakti un padomi, kas palīdzēs izprast un iemācīties tēmas būtību.</p>
        <button class="sub-button">Teorija</button>
      </router-link>
      <router-link to="/uzdevumi" class="main-button">
        <div class="letter">T</div>
        <p class="description">Uzdevumi: Uzdevumu sadaļā tu vari trenēties un pārbaudīt savas zināšanas par apgūto materiālu. Šeit piedāvāti dažādi uzdevumi un problēmas, kas palīdzēs pārbaudīt un stiprināt tavas prasmes un izpratni par konkrēto jomu.

</p>
        <button class="sub-button">Uzdevumi</button>
      </router-link>
      <router-link to="/testi" class="main-button">
        <div class="letter">E</div>
        <p class="description">Testi: Šeit vari pārbaudīt savas zināšanas uz atzīmi, lai pēc tam saprastu, cik labi esi apguvis/noraizējis apgūto materiālu. Testi sniedz iespēju novērtēt savas zināšanas un sagatavoties galīgajiem pārbaudījumiem vai eksāmeniem</p>
        <button class="sub-button">Testi</button>
      </router-link>
      <router-link to="/profils" class="main-button">
        <div class="letter">M</div>
        <p class="description">Profils: Šeit atrodama informācija par tevi un taviem sasniegumiem. Tu vari redzēt savu personisko attīstību, rezultātus un progresu. Profils ir vieta, kur iegūt pārskatu par saviem mācību sasniegumiem un turpmākajiem mērķiem.</p>
        <button class="sub-button">Profils</button>
      </router-link>
    </div>
  </div>
  <div>
  </div>
</template>

<script lang="ts" setup>
  import NavBar from '../components/NavBar.vue';
</script>

<style scoped>
  #main {
    margin-top: 6rem;
  }

  .main-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    max-width: 300px; /* Set a maximum width */
    height: 500px; /* Set a fixed height for the buttons */
    background-color: #6dc6cb;
    color: #173744;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    text-align: center;
    text-decoration: none;
    position: relative;
  }

  .main-button:hover {
    background-color: #173744;
    color: #fff;
  }

  .letter {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 30px;
    margin-top: 20px;
  }

  .description {
    margin-bottom: 5px;
  }

/* Update the margin for #main to reduce spacing between windows and increase distance from edges */
#main {
  margin-top: 6rem; /* Adjust the top margin */
  margin-right: 4rem; /* Increase the right margin */
  margin-left: 4rem; /* Increase the left margin */
}

/* Update the padding for .sub-button to increase spacing from the edges */
.sub-button {
  padding: 15px 30px; /* Increase the padding for left and right */
  background-color: #173744;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;
  bottom: 30px; /* Adjust the bottom spacing as needed */
  width: 70%; /* Make the buttons take the full width */
}
  .sub-button:hover {
    background-color: #6dc6cb;
  }

  .buttons-container {
  display: flex;
  justify-content: space-around;
  margin-top: auto; /* Set margin-top to auto to push the buttons to the bottom */
}

</style>

