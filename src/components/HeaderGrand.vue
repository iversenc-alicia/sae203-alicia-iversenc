<template>
  <div class="relative my-auto flex h-[118px] w-full flex-row gap-8">
    <LogoHeader class="mr-36 pr-4" />
    <RouterLink class="pt-6 text-xl font-bold" to="/">Electro Bancal</RouterLink>
    <RouterLink class="pt-6 text-xl font-bold" to="/Programmation">Programmation</RouterLink>
    <RouterLink class="pt-6 text-xl font-bold" to="/Festival">Festival</RouterLink>
    <RouterLink class="pt-6 text-xl font-bold" to="/Concert">Concerts</RouterLink>
    <RouterLink class="pt-6 text-xl font-bold" to="/Artistes">Artistes</RouterLink>
    <RouterLink class="pt-6 text-xl font-bold" to="/ArtisteSeul">Martin Garrix</RouterLink>
    <RouterLink class="pt-6 text-xl font-bold" to="/Contact">Contact</RouterLink>
  </div>
</template>

<script>
import LogoHeader from "./icons/LogoHeader.vue";
export default {
  components: { LogoHeader },
};
</script>