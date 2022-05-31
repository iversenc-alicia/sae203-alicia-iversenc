<template>
  <div class="relative my-auto grid h-[118px] w-full grid-cols-7">
    <LogoHeader class="pr-4" />
    <RouterLink class="text pt-6 text-xl font-bold" to="/">Electro Bancal</RouterLink>
    <RouterLink class="pt-6 text-xl font-bold" to="/Artistes">Artistes</RouterLink>
    <RouterLink class="pt-6 text-xl font-bold" to="/Programmation">Programmation</RouterLink>
    <RouterLink class="pt-6 text-xl font-bold" to="/Festival">Festival</RouterLink>
    <RouterLink class="pt-6 text-xl font-bold" to="/Concert">Concerts</RouterLink>
    <RouterLink class="pt-6 text-xl font-bold" to="/Contact">Contact</RouterLink>
  </div>
</template>

<script>
import LogoHeader from "./icons/LogoHeader.vue";
export default {
  components: { LogoHeader },
};
</script>