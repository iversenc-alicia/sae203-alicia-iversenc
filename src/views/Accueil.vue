<template>
  <main>
    <h2 class="text-2xl text-gray-50">3 artistes</h2>
    <h2 class="text-2xl">3 jours</h2>
    <h2 class="text-2xl">2 scènes</h2>
    <ProgrammeArtistes />
    <CardRose />
  </main>
</template>

<script>
import ProgrammeArtistes from "/src/components/ProgrammeArtistes.vue";
import CardRose from "/src/components/cards/CardRose.vue";
export default {
  components: { CardRose, ProgrammeArtistes },
};
</script>