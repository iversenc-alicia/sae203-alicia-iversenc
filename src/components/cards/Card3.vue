<script>
import { TrashIcon, PencilAltIcon, PlusCircleIcon } from "@heroicons/vue/outline";
export default {
  /* Les "props" servent à définir les "attributs" qui seront passés a l'instance du composant pour le personnalisé.
  Chaque "props" a un nom et un type */
  props: {
    id: String,
    nom: String,
    image: String,
  },
  components: { PencilAltIcon, TrashIcon },
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
            <div class="flex flex-row">
              <RouterLink :to="{ name: 'Update', params: { id: id } }"><PencilAltIcon class="w-8" /></RouterLink>
              <RouterLink :to="{ name: 'Delete', params: { id: id } }"><TrashIcon class="w-8" /></RouterLink>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</template>

