<template>
  <div class="text-2xl">
    <LogoHeader class="mr-auto gap-8 space-x-7 pr-4" />
    <div class="my-auto mr-5 space-x-10">
      <RouterLink class="pt-6 font-bold" to="/">Electro Bancal</RouterLink>
      <RouterLink class="pt-6 font-bold" to="/Programmation">Programmation</RouterLink>
      <RouterLink class="pt-6 font-bold" to="/Festival">Festival</RouterLink>
      <RouterLink class="pt-6 font-bold" to="/Concert">Concerts</RouterLink>
      <RouterLink class="pt-6 font-bold" to="/Artistes">Artistes</RouterLink>
      <RouterLink class="pt-6 font-bold" to="/ArtisteSeul">Martin Garrix</RouterLink>
      <RouterLink class="pt-6 font-bold" to="/Contact">Contact</RouterLink>
    </div>
  </div>
</template>

<script>
import LogoHeader from "./icons/LogoHeader.vue";
export default {
  components: { LogoHeader },
};
</script>