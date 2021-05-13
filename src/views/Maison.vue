<template>
  <div>
    <img src="../assets/1c_Chambre_v1.png" usemap="#image_map" />
    <map name="image_map">
      <area
        alt="Changement de tenue"
        title="Changement de tenue"
        href="#/tenue"
        coords="699,102,1050,550"
        shape="rect"
      />
      <area
        alt="Contacter l'équipe soignante"
        title="Contacter l'équipe soignante"
        href="#/contacter"
        coords="49,432,293,699"
        shape="rect"
      />
      <area
        alt="Retourner à la carte"
        title="Retourner à la carte"
        href="#/map"
        coords="1092,100,1304,731"
        shape="rect"
      />
    </map>
  </div>
</template>

<script>
export default {
  name: "Maison",
  components: {},
};
</script>
