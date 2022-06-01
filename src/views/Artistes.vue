<template>
  <header>
    <baniere page="Artistes" />
  </header>
  <main class="mx-auto">
    <h2 class="ml-10 mb-8 mt-14 text-4xl">Les incontournables</h2>
    <div class="mx-auto grid grid-cols-1 justify-items-center gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <a href="./ArtisteSeul"
        ><card-rose nom="Martin Garrix" scene="23 067 320 auditeurs par mois" image="/img/martingarrix-fonce.webp"
      /></a>
      <a href="./ArtisteSeul"><card-rose nom="Marshmello" scene="39 040 156 auditeurs par mois" image="/img/marshmello-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="Gabry Ponte" scene="15 302 759 auditeurs par mois" image="/img/gabryponte-fone.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="DJ Snake" scene="28 818 882 auditeurs par mois" image="/img/djsnake-fonce.webp" /></a>
      <a href="./ArtisteSeul"
        ><card-rose nom="Timmy Trumpet" scene="10 029 125 auditeurs par mois" image="/img/timmytrumpet-fonce.webp"
      /></a>
      <a href="./ArtisteSeul"><card-rose nom="Joel Corry" scene="21 221 035 auditeurs par mois" image="/img/joelcorry-fonce.webp" /></a>
    </div>
    <h2 class="ml-10 mb-8 mt-14 text-4xl">A ne pas rater</h2>
    <div class="mx-auto grid grid-cols-1 justify-items-center gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <a href="./ArtisteSeul"><card-rose nom="Don Diablo" scene="6 938 751 auditeurs par mois" image="/img/djsnake-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="Sikdope" scene="685 173 auditeurs par mois" image="/img/sikdope-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="KSHMR" scene="6 885 032 auditeurs par mois" image="/img/kshmr-fonce.jpg" /></a>

      <a href="./ArtisteSeul"><card-rose nom="Mike Candys" scene="3 500 139 auditeurs par mois" image="/img/mikecandys-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="Nicky Romero" scene="5 498 167 auditeurs par mois" image="/img/nickyromero-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose nom="Showtek" scene="4 384 856 auditeurs par mois" image="/img/showtek-fonce.webp" /></a>
    </div>
  </main>

  <a class="my-20 ml-6 flex justify-end text-2xl font-semibold" href="./Programmation">→ Voir toute la programmation</a>
</template>

<script>
import Baniere from "/src/components/Baniere.vue";
import ArtisteCard from "/src/components/cards/ArtisteCard.vue";
import CardRose from "/src/components/cards/CardRose.vue";
export default {
  components: { Baniere, ArtisteCard, CardRose },
};
</script>