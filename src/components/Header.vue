<template>
  <header class="sticky top-0 z-50 flex h-16 w-screen items-center">
    <MenuAlt1Icon class="absolute right-4 h-8 w-8" @click="MenuOpen = !MenuOpen" v-if="!MenuOpen" />
    <XIcon class="absolute right-4 z-50 h-8 w-8" @click="MenuOpen = !MenuOpen" v-if="MenuOpen" />
    <LogoHeader class="mr-auto h-11 w-auto" />
    <nav
      class="absolute left-0 top-0 bottom-0 right-0 h-screen -translate-x-full bg-gray-950 opacity-0"
      :class="MenuOpen && 'translate-x-0 opacity-100'"
    >
      <ul class="flex h-full flex-col items-center justify-center gap-14 text-left text-3xl font-bold">
        <li>
          <RouterLink to="/" @click="MenuOpen = !MenuOpen">Electro Bancal</RouterLink>
        </li>
        <li>
          <RouterLink to="/Programmation" @click="MenuOpen = !MenuOpen">Programmation</RouterLink>
        </li>
        <li>
          <RouterLink to="/Festival" @click="MenuOpen = !MenuOpen">Festival</RouterLink>
        </li>
        <li>
          <RouterLink to="/Concert" @click="MenuOpen = !MenuOpen">Concert</RouterLink>
        </li>
        <li>
          <RouterLink to="/Artistes" @click="MenuOpen = !MenuOpen">Artistes</RouterLink>
        </li>
        <li>
          <RouterLink to="/ArtisteSeul" @click="MenuOpen = !MenuOpen">Martin Garrix</RouterLink>
        </li>
        <li>
          <RouterLink to="/Contact" @click="MenuOpen = !MenuOpen">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import LogoHeader from "./icons/Logo.vue";
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/outline";

export default {
  data() {
    return {
      MenuOpen: false,
    };
  },
  components: { LogoHeader, MenuAlt1Icon, XIcon },
};
</script> 