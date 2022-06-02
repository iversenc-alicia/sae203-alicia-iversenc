<script>
import GenreMusique from "../components/cards/GenreMusique.vue";
export default {
  components: { GenreMusique },
};
</script>

<template>
  <h2 class="ml-10 mb-8 mt-14 text-4xl font-semibold">Vos goûts musicaux favoris</h2>
  <div class="flex flex-wrap">
    <GenreMusique genre="electro house" /><GenreMusique genre="electro house pluuuuus " /><GenreMusique
      genre="electro house"
    /><GenreMusique genre="electro house" />
  </div>

  <h2 class="ml-10 mb-8 mt-14 text-4xl font-semibold">Vos artistes favoris</h2>
</template>
