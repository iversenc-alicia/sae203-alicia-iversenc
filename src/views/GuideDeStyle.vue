<template>
  <div class="gap-y-5 text-center">
    <h1 class="text-2xl font-semibold">Font</h1>
    <ul>
      <li class="text-base">Inter</li>
      <li class="text-lg">Inter</li>
      <li class="text-xl">Inter</li>
      <li class="text-2xl">Inter</li>
      <li class="text-2xl font-semibold">Inter</li>
      <li class="text-2xl font-semibold">Inter</li>
    </ul>
    <h1 class="mt-10 text-2xl font-semibold">Couleurs</h1>
    <div class="m-6 flex justify-center">
      <div class="h-10 w-40 rounded-l-lg bg-cyan-600"></div>
      <div class="h-10 w-40 bg-purple-900"></div>
      <div class="h-10 w-40 bg-gray-950 stroke-white"></div>
      <div class="h-10 w-40 bg-pink-600"></div>
      <div class="h-10 w-40 bg-cyan-900"></div>
      <div class="h-10 w-40 rounded-r-lg bg-gray-50"></div>
    </div>
  </div>
  <h1 class="mt-10 text-2xl font-semibold">Composants</h1>
  <div class="grid grid-cols-7">
    <card-rose nom="Marshmello" scene="39 040 156 auditeurs par mois" image="/img/marshmello-fonce.webp" />
    <Baniere />
    <ReseauxArtiste />
  </div>
</template>

<script>
import CardRose from "../components/cards/CardRose.vue";
import Baniere from "/src/components/Baniere.vue";
import ReseauxArtiste from "/src/components/cards/ReseauxArtiste.vue";
export default {
  components: { Baniere, ReseauxArtiste, CardRose },
};
</script>
