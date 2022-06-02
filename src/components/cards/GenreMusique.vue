<script>
import { MusicNoteIcon } from "@heroicons/vue/outline";
export default {
  /* Les "props" servent à définir les "attributs" qui seront passés a l'instance du composant pour le personnalisé.
  Chaque "props" a un nom et un type */
  props: {
    genre: String,
  },
  components: { MusicNoteIcon },
};
</script>

<template>
  <div class="mx-auto flex w-3/4 max-w-xs rounded-lg bg-gradient-to-b from-pink-600 to-gray-950 p-2 lg:max-w-lg xl:max-w-xl">
    <div class="mx-auto flex flex-row bg-auto">
      <MusicNoteIcon class="mx-2 w-16" />
      <h3 class="my-auto py-1 text-xl font-bold lg:text-2xl xl:text-3xl">{{ genre }}</h3>
    </div>
  </div>
</template>
