<template>
  <header>
    <baniere page="Le festival" />
  </header>

  <h2 class="mb-10 ml-8 text-4xl font-bold">A propos de l'Electro Bancal</h2>
  <div class="mx-10">
    <div class="grid grid-cols-1 lg:grid-cols-2">
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
  <h2 class="mt-20 mb-10 ml-8 mr-8 text-4xl font-bold">Le lac de la Bancalié</h2>
  <div class="gp-5 mx-auto grid w-10/12 grid-cols-2">
    <img class="" src="/public/img/bancalie1.webp" alt="photo du lac de la Bancalié" />
    <img class="" src="/public/img/bancalie2.webp" alt="photo du lac de la Bancalié" />
  </div>
  <div class="mx-auto grid w-10/12 grid-cols-1">
    <img src="/public/img/bancalie3.webp" alt="photo du lac de la Bancalié" />
  </div>

  <h2 class="ml-8 mt-20 mb-10 text-4xl font-bold">Deux scènes</h2>

  <div class="grids-cols-1 mx-10 grid sm:grid-cols-2">
    <div>
      <h3 class="mt-5 mb-5 text-center text-2xl">Scène Plage (scène terrestre)</h3>
      <img class="" src="/public/img/festival-terrestre.webp" alt="" />
    </div>

    <div>
      <h3 class="mx-auto mt-5 mb-5 text-center text-2xl">Scène Flottante (scène aquatique)</h3>
      <img class="" src="/public/img/festival-flottant.webp" alt="" />
    </div>
  </div>
</template>

<script>
import Baniere from "/src/components/Baniere.vue";
export default {
  components: { Baniere },
};
</script>