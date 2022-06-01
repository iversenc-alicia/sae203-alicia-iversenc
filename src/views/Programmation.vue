<template>
  <header>
    <baniere page="Programmation" />
  </header>
  <main class="justify-items-center">
    <h2 class="ml-10 mb-8 mt-14 text-4xl">Vendredi 8 Juillet</h2>
    <div class="grid grid-cols-1 justify-items-center gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <a href="./ArtisteSeul"><card-rose nom="Martin Garrix" scene="Scène Plage" heure="14h30" image="/img/martingarrix-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="Gabry Ponte" scene="Scène Flottante" heure="14h30" image="/img/gabryponte-fone.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="DJ Snake" scene="Scène Plage" heure="20h30" image="/img/djsnake-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="Showtek" scene="Scène Flottante" heure="20h30" image="/img/showtek-fonce.webp" /></a>
    </div>
    <h2 class="ml-10 mb-8 mt-14 text-4xl">Samedi 9 Juillet</h2>
    <div class="mx-10 grid grid-cols-1 justify-items-center gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <a href="./ArtisteSeul"><card-rose nom="Timmy Trumpet" scene="Scène Plage" heure="14h30" image="/img/timmytrumpet-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="Joel Corry" scene="Scène Flottante" heure="14h30" image="/img/joelcorry-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="Don Diablo" scene="Scène Plage" heure="20h30" image="/img/dondiablo-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="Sikdope" scene="Scène Flottante" heure="20h30" image="/img/sikdope-fonce.webp" /></a>
    </div>
    <h2 class="ml-10 mb-8 mt-14 text-4xl">Dimanche 10 Juillet</h2>
    <div class="mx-10 grid grid-cols-1 justify-items-center gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <a href="./ArtisteSeul"><card-rose nom="KSHMR" scene="Scène Plage" heure="14h30" image="/img/kshmr-fonce.jpg" /></a>
      <a href="./ArtisteSeul"><card-rose nom="Marshmello" scene="Scène Flottante" heure="14h30" image="/img/marshmello-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="Mike Candys" scene="Scène Plage" heure="20h30" image="/img/mikecandys-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="Nicky Romero" scene="Scène Flottante" heure="20h30" image="/img/nickyromero-fonce.webp" /></a>
    </div>
  </main>

  <a class="my-20 mr-6 flex justify-end text-2xl font-semibold" href="./Artistes">→ Voir tous les artistes</a>
</template>

<script>
import CardRose from "../components/cards/CardRose.vue";
import Baniere from "/src/components/Baniere.vue";

export default {
  components: { CardRose, Baniere },
};
</script>
