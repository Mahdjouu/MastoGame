<template>
  <div>
    <img src="../assets/1b_MAP_v1.png" usemap="#image_map" />
    <map name="image_map">
      <area
        alt="Monde de la concentration et de la mémoire - La grotte secrète"
        title="Monde de la concentration et de la mémoire - La grotte secrète"
        href="#/grotte"
        coords="54,11,409,249"
        shape="rect"
      />
      <area
        alt="Maison"
        title="Maison"
        href="#/maison"
        coords="477,248,784,541"
        shape="rect"
      />
      <area
        alt="Monde du Sommeil - Le territoire de la Fée du Sommeil"
        title="Monde du Sommeil - Le territoire de la Fée du Sommeil"
        href="#/sommeil"
        coords="12,464,298,733"
        shape="rect"
      />
      <area
        alt="Monde de la gestion de l'anxiété et des émotions - Le château dans les nuages"
        title="Monde de la gestion de l'anxiété et des émotions - Le château dans les nuages"
        href="#/chateau"
        coords="1053,399,1333,689"
        shape="rect"
      />
      <area
        alt="Monde de la gestion de la dépression - Le lac ombrageux"
        title="Monde de la gestion de la dépression - Le lac ombrageux"
        href="#/lac"
        coords="998,35,1346,323"
        shape="rect"
      />
    </map>
  </div>
</template>

<script>
export default {
  name: "Map",
};
</script>
