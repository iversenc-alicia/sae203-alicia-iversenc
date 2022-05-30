<template>
  <header>
    <baniere page="Artistes" />
  </header>
  <h2 class="text-2xl text-gray-50">Artistes</h2>
  <main class="mx-7">
    <h2 class="ml-10 mb-8 mt-14 text-4xl">Les incontournables</h2>
    <div class="mx-10 grid grid-cols-4">
      <div>
        <card-rose nom="Martin Garrix" scene=" Plage" heure="14h30" image="/img/martingarrix-fonce.webp" />
      </div>
      <div>
        <card-rose nom="Gabry Ponte" scene=" Flottante" heure="14h30" image="/img/gabryponte-fone.webp" />
      </div>
      <div>
        <card-rose nom="DJ Snake" scene=" Plage" heure="20h30" image="/img/djsnake-fonce.webp" />
      </div>
      <div>
        <card-rose nom="Showtek" scene=" Flottante" heure="20h30" image="/img/showtek-fonce.webp" />
      </div>
    </div>
    <h2 class="ml-10 mb-8 mt-14 text-4xl">On ne les présente plus</h2>
    <div class="mx-10 grid grid-cols-4">
      <div>
        <card-rose nom="Timmy Trumpet" scene=" Plage" heure="14h30" image="/img/timmytrumpet-fonce.webp" />
      </div>
      <div>
        <card-rose nom="Joel Corry" scene=" Flottante" heure="14h30" image="/img/joelcorry-fonce.webp" />
      </div>
      <div>
        <card-rose nom="Don Diablo" scene=" Plage" heure="20h30" image="/img/djsnake-fonce.webp" />
      </div>
      <div>
        <card-rose nom="Sikdope" scene=" Flottante" heure="20h30" image="/img/sikdope-fonce.webp" />
      </div>
    </div>
    <h2 class="ml-10 mb-8 mt-14 text-4xl">A absolument découvrir</h2>
    <div class="mx-10 grid grid-cols-4">
      <div>
        <card-rose nom="KSHMR" scene=" Plage" heure="14h30" image="/img/kshmr-fonce.jpg" />
      </div>
      <div>
        <card-rose nom="Marshmello" scene=" Flottante" heure="14h30" image="/img/marshmello-fonce.webp" />
      </div>
      <div>
        <card-rose nom="Mike Candys" scene=" Plage" heure="20h30" image="/img/mikecandys-fonce.webp" />
      </div>
      <div>
        <card-rose nom="Nicky Romero" scene=" Flottante" heure="20h30" image="/img/nickyromero-fonce.webp" />
      </div>
    </div>
  </main>
</template>

<script>
import Baniere from "/src/components/Baniere.vue";
import ArtisteCard from "/src/components/cards/ArtisteCard.vue";
import CardRose from "/src/components/cards/CardRose.vue";
export default {
  components: { Baniere, ArtisteCard, CardRose },
};
</script>