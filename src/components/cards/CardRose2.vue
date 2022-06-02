<script>
export default {
  /* Les "props" servent à définir les "attributs" qui seront passés a l'instance du composant pour le personnalisé.
  Chaque "props" a un nom et un type */
  props: {
    nom: String,
    ecoutes: String,
    image: String,
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
            <img class="aspect-video w-full object-cover" :src="image" alt="artiste" />
          </div>
          <figcaption class="p-4 text-center">
            <h3 class="py-1 text-2xl font-semibold">{{ nom }}</h3>
            <div class="flex flex-wrap gap-x-3">
              <img src="/img/Spotify.svg" alt="logo spotify" />
              <p class="py-1 text-base">{{ ecoutes }}</p>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</template>


