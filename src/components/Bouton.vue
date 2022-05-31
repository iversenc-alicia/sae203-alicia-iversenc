<template>
  <div class="relative flex max-w-sm justify-center gap-2.5 rounded-[3px] border border-pink-600 px-3 py-2">
    <p class="max-w-sm flex-shrink-0 flex-grow-0 text-center text-sm font-semibold text-pink-600 lg:text-2xl">{{ nom }}</p>
  </div>
</template>

<script>
export default {
  props: {
    nom: String,
  },
  components: {},
};
</script>

