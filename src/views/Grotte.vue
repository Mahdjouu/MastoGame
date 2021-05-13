<template>
  <div class="grotte">
    <video controls>
      <source src="../assets/2a_Jeu_Simul-low.mp4" type="video/mp4" />
      <p>
        Votre navigateur ne prend pas en charge les vidéos HTML5. Voici
        <a href="https://youtu.be/pMqNHlrUl3E">un lien pour voir la vidéo</a>.
      </p>
    </video>
    <a href="#/minijeu1">MiniJeu n°1 - Objets cachés</a>
    <br />
    <br />
    <br />
    <a href="#/minijeu2">MiniJeu n°2 - Mot intrus</a>
  </div>
</template>

<style scoped>
video {
  width: 100%;
  padding-bottom: 20px;
}

a {
  text-decoration: none;
  border: 1px solid;
  border-radius: 12px;
  padding: 12px;
  font-size: 15px;
  font-weight: 600;
  color: #7352bd;
}
</style>
