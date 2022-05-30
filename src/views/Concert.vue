<template>
  <header>
    <baniere page="Concert" />
    <img class="mx-auto w-3/4" src="/public/img/martingarrix-clair.webp" alt="Martin Garrix" />
  </header>

  <div class="mx-auto mt-10 grid w-3/4 grid-cols-2">
    <div class="mx-auto content-center">
      <h2 class="text-center text-4xl font-bold">MARTIN GARRIX</h2>

      <p class="my-auto mx-auto pt-5 text-base">
        On ne le présente plus! Retrouvez Martin Garrix le samedi 9 Juillet à 14h30 sur la scène Plage du festival Electro Bancal.
      </p>
      <a class="my-20 mr-6 flex justify-end text-2xl font-semibold" href="./ArtisteSeul">→ Voir la page de l'artiste</a>
    </div>

    <div class="mx-auto">
      <InfoConcert />
    </div>
  </div>

  <div class="mx-auto mt-20 grid w-10/12 grid-cols-2">
    <img class="p-3" src="/public/img/martin-1.webp" alt="" />
    <img class="p-3" src="/public/img/martin-2.webp" alt="" />
    <img class="p-3" src="/public/img/martin-3.webp" alt="" />
    <img class="p-3" src="/public/img/martin-1.webp" alt="" />
  </div>
</template>

<script>
import Baniere from "/src/components/Baniere.vue";
import InfoConcert from "/src/components/cards/InfoConcert.vue";
export default {
  components: { Baniere, InfoConcert },
};
</script>