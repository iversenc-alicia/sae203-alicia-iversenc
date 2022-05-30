<template>
  <header>
    <baniere page="Le festival" />
  </header>
  <div class="mx-10">
    <div class="grid grid-cols-2">
      <p class="my-auto p-5 text-base">
        Le festival electro Bancal c’est avant tout de la bonne musique. 12 artistes piliers du monde de la musique électro réunis sur 3
        jours. Parmi eux on peut trouver Martin Garrix, MArshmello ou encore DJ Snake. Le genre de musique privilégié est EDM (Electronic
        Dance Music) avec pour but de vous ambiancer un maximum. Chaque artiste pourra alors diffuser son propre style de musique comme
        Electro House, Deep House, Hard House…
      </p>
      <img src="/public/img/festival-1.webp" class="mb-5" />
      <img src="/public/img/festival-2.webp" class="mt-5" />
      <p class="my-auto p-5 text-base">
        Ces artistes d'exception sont accompagnés par un cadre tout aussi exceptionnel. En effet, le festival se déroule dans un lieu
        emblématique du Sud-Ouest : le lac de la Bancalié. Un lac entouré de relief. Pour profiter pleinement de ce cadre, nos équipes ont
        installé deux scènes : Une scène sur l’eau : la scène Flottante <br />
      </p>
    </div>
  </div>
</template>

<script>
import Baniere from "/src/components/Baniere.vue";
export default {
  components: { Baniere },
};
</script>