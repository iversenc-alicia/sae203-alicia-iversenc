<template>
  <header>
    <baniere page="Concert" />
    <img class="mx-auto w-3/4" src="/public/img/martingarrix-clair.webp" alt="Martin Garrix" />
  </header>

  <div class="mx-auto mt-10 grid w-3/4 grid-cols-1 sm:grid-cols-2">
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

  <div class="mx-auto mt-20 grid w-10/12 grid-cols-1 gap-10 lg:grid-cols-3">
    <img class="p-3" src="/img/martin-1.webp" alt="martin garrix" />
    <img class="p-3" src="/img/martin-2.webp" alt="martin garrix" />
    <img class="p-3" src="/img/martin-3.webp" alt="martin garrix" />
  </div>
  <div>
    <h2 class="ml-10 mb-8 mt-14 text-4xl font-bold">Le même jour</h2>
    <div class="grid grid-cols-1 justify-items-center sm:grid-cols-3">
      <a href="./ArtisteSeul"><card-rose nom="Gabry Ponte" scene="Scène Flottante" heure="14h30" image="/img/gabryponte-fone.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="DJ Snake" scene="Scène Plage" heure="20h30" image="/img/djsnake-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="Showtek" scene="Scène Flottante" heure="20h30" image="/img/showtek-fonce.webp" /></a>
    </div>
  </div>
</template>

<script>
import Baniere from "/src/components/Baniere.vue";
import InfoConcert from "/src/components/cards/InfoConcert.vue";
import CardRose from "/src/components/cards/CardRose.vue";
export default {
  components: { Baniere, InfoConcert, CardRose },
};
</script>