<script>
export default {
  /* Les "props" servent à définir les "attributs" qui seront passés a l'instance du composant pour le personnalisé.
  Chaque "props" a un nom et un type */
  props: {
    nom: String,
    scene: String,
    heure: String,
    photo: String,
    date: String,
  },
  components: {},
};
</script>

<template>
  <div class="w-96 max-w-xs bg-gradient-to-b from-pink-600 to-gray-950 lg:max-w-lg xl:max-w-2xl">
    <div class="container mx-auto">
      <div class="block">
        <div class="flex flex-col">
          <div class="p-4">
            <img class="aspect-video w-full object-cover" :src="photo" alt="artiste" />
          </div>
          <figcaption class="p-4 text-center">
            <h3 class="py-1 text-2xl font-semibold">{{ nom }}</h3>
            <h4 class="py-1 text-xl">{{ date }}</h4>
            <h4 class="py-1 text-xl">{{ heure }}</h4>
            <p class="py-1 text-base">{{ scene }}</p>
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</template>


