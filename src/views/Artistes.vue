<template>
  <header>
    <baniere page="Artistes" />
  </header>
  <main class="mx-auto">
    <h2 class="ml-10 mb-8 mt-14 text-4xl">Les incontournables</h2>
    <div class="mx-auto grid grid-cols-1 justify-items-center gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <a href="./ArtisteSeul"
        ><card-rose-2 nom="Martin Garrix" ecoutes="23 067 320 auditeurs par mois" image="/img/martingarrix-fonce.webp"
      /></a>
      <a href="./ArtisteSeul"
        ><card-rose-2 nom="Marshmello" ecoutes="39 040 156 auditeurs par mois" image="/img/marshmello-fonce.webp"
      /></a>
      <a href="./ArtisteSeul"
        ><card-rose-2 nom="Gabry Ponte" ecoutes="15 302 759 auditeurs par mois" image="/img/gabryponte-fone.webp"
      /></a>
      <a href="./ArtisteSeul"><card-rose-2 nom="DJ Snake" ecoutes="28 818 882 auditeurs par mois" image="/img/djsnake-fonce.webp" /></a>
      <a href="./ArtisteSeul"
        ><card-rose-2 nom="Timmy Trumpet" ecoutes="10 029 125 auditeurs par mois" image="/img/timmytrumpet-fonce.webp"
      /></a>
      <a href="./ArtisteSeul"><card-rose-2 nom="Joel Corry" ecoutes="21 221 035 auditeurs par mois" image="/img/joelcorry-fonce.webp" /></a>
    </div>
    <h2 class="ml-10 mb-8 mt-14 text-4xl">A ne pas rater</h2>
    <div class="mx-auto grid grid-cols-1 justify-items-center gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <a href="./ArtisteSeul"><card-rose-2 nom="Don Diablo" ecoutes="6 938 751 auditeurs par mois" image="/img/djsnake-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose-2 nom="Sikdope" ecoutes="685 173 auditeurs par mois" image="/img/sikdope-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose-2 nom="KSHMR" ecoutes="6 885 032 auditeurs par mois" image="/img/kshmr-fonce.jpg" /></a>

      <a href="./ArtisteSeul"
        ><card-rose-2 nom="Mike Candys" ecoutes="3 500 139 auditeurs par mois" image="/img/mikecandys-fonce.webp"
      /></a>
      <a href="./ArtisteSeul"
        ><card-rose-2 nom="Nicky Romero" ecoutes="5 498 167 auditeurs par mois" image="/img/nickyromero-fonce.webp"
      /></a>
      <a href="./ArtisteSeul"><card-rose-2 nom="Showtek" ecoutes="4 384 856 auditeurs par mois" image="/img/showtek-fonce.webp" /></a>
    </div>
  </main>

  <a class="my-20 ml-6 flex justify-end text-2xl font-semibold" href="./Programmation">→ Voir toute la programmation</a>
</template>

<script>
import Baniere from "/src/components/Baniere.vue";
import ArtisteCard from "/src/components/cards/ArtisteCard.vue";
import CardRose2 from "/src/components/cards/CardRose2.vue";
export default {
  components: { Baniere, ArtisteCard, CardRose2 },
};
</script>