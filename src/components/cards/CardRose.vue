<script>
export default {
  /* Les "props" servent à définir les "attributs" qui seront passés a l'instance du composant pour le personnalisé.
  Chaque "props" a un nom et un type */
  props: {
    nom: String,
    scene: String,
    heure: String,
    image: String,
  },
  components: {},
};
</script>

<template>
  <div class="relative h-[406px]">
    <div class="absolute top-[197px] flex h-52 w-[300px] flex-col items-center justify-center gap-2.5 overflow-hidden">
      <div
        class="
          relative
          flex flex-grow flex-col
          items-center
          justify-center
          gap-3
          self-stretch
          overflow-hidden
          bg-gradient-to-b
          from-pink-600
          to-pink-600/0
          px-[73px]
          py-[50px]
        "
      >
        <p class="flex-shrink-0 flex-grow-0 text-center text-2xl font-semibold text-gray-50">{{ nom }}</p>
        <p class="flex-shrink-0 flex-grow-0 text-center text-xl text-gray-50">scene{{ scene }}</p>
        <p class="flex-shrink-0 flex-grow-0 text-center text-base font-medium text-gray-50">{{ heure }}</p>
      </div>
    </div>
    <div class="absolute flex h-[226px] w-[300px] flex-col items-start justify-start gap-2.5 overflow-hidden">
      <img :src="image" alt="artiste" width="800" height="450" />
    </div>
  </div>
</template>


