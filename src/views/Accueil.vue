<template>
  <header>
    <baniere page="Accueil" />
  </header>
  <main class="mx-12">
    <div class="mb-28 grid w-full grid-cols-4">
      <div class="float-left my-auto mx-auto">
        <h2 class="text-4xl font-bold">3 artistes</h2>
        <h2 class="text-4xl font-bold">3 jours</h2>
        <h2 class="text-4xl font-bold">2 scènes</h2>
      </div>
      <img src="/public/img/martingarrix-clair.webp" class="flex-grow self-stretch object-cover" />
      <img src="/public/img/djsnake-clair.webp" class="flex-grow self-stretch object-cover" />
      <img src="/public/img/marshmello-clair.webp" class="flex-grow self-stretch object-cover" />
    </div>
    <Bouton />
    <div class="grid grid-cols-4 text-4xl">
      <div class="float-left my-auto mx-auto">
        <h2 class="font-bold text-gray-50">Un programme complet</h2>
      </div>
      <div class="pb-2 text-center text-2xl font-semibold">
        <h3>Vendredi 8 juillet</h3>
        <ProgrammeArtistes />
      </div>
      <div class="text-center text-2xl font-semibold">
        <h3>Samedi 9 juillet</h3>
        <ProgrammeArtistes />
      </div>
      <div class="text-center text-2xl font-semibold">
        <h3>Dimanche 10 juillet</h3>
        <ProgrammeArtistes />
      </div>
    </div>

    <CardRose />
  </main>
</template>

<script>
import ProgrammeArtistes from "/src/components/ProgrammeArtistes.vue";
import CardRose from "/src/components/cards/CardRose.vue";
import Bouton from "/src/components/Bouton.vue";
import Baniere from "/src/components/Baniere.vue";
export default {
  components: { CardRose, ProgrammeArtistes, Bouton, Baniere },
};
</script>