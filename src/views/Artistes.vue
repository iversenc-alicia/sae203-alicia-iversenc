<template>
  <header>
    <baniere page="Programmation" />
  </header>
  <main class="mx-auto">
    <h2 class="ml-10 mb-8 mt-14 text-4xl">Les incontournables</h2>
    <div class="mx-auto grid grid-cols-1 gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <div>
        <card-rose nom="Martin Garrix" scene="écoutes sur Spotify" image="/img/martingarrix-fonce.webp" />
      </div>
      <div>
        <card-rose nom="Gabry Ponte" scene="écoutes sur Spotify" image="/img/gabryponte-fone.webp" />
      </div>
      <div>
        <card-rose nom="DJ Snake" scene="écoutes sur Spotify" image="/img/djsnake-fonce.webp" />
      </div>
      <div>
        <card-rose nom="Showtek" scene=" Floécoutes sur Spotify" image="/img/showtek-fonce.webp" />
      </div>
      <div>
        <card-rose nom="Timmy Trumpet" scene="écoutes sur Spotify" image="/img/timmytrumpet-fonce.webp" />
      </div>
      <div>
        <card-rose nom="Joel Corry" scene="écoutes sur sSpotify" image="/img/joelcorry-fonce.webp" />
      </div>
    </div>
    <h2 class="ml-10 mb-8 mt-14 text-4xl">A ne pas rater</h2>
    <div class="mx-auto grid grid-cols-1 gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <div>
        <card-rose nom="Don Diablo" scene="écoutes sur Spotify" image="/img/djsnake-fonce.webp" />
      </div>
      <div>
        <card-rose nom="Sikdope" scene="écoutes sur Spotify" image="/img/sikdope-fonce.webp" />
      </div>
      <div>
        <card-rose nom="KSHMR" scene="écoutes sur Spotify" image="/img/kshmr-fonce.jpg" />
      </div>
      <div>
        <card-rose nom="Marshmello" scene="écoutes sur Spotify" image="/img/marshmello-fonce.webp" />
      </div>
      <div>
        <card-rose nom="Mike Candys" scene="écoutes sur Spotify" image="/img/mikecandys-fonce.webp" />
      </div>
      <div>
        <card-rose nom="Nicky Romero" scene="écoutes sur Spotify" image="/img/nickyromero-fonce.webp" />
      </div>
    </div>
  </main>

  <a class="my-20 mr-6 flex justify-end text-2xl font-semibold" href="./Artistes">→ Voir tous les artistes</a>
</template>

<script>
import Baniere from "/src/components/Baniere.vue";
import ArtisteCard from "/src/components/cards/ArtisteCard.vue";
import CardRose from "/src/components/cards/CardRose.vue";
export default {
  components: { Baniere, ArtisteCard, CardRose },
};
</script>