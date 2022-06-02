<script>
import { RouterLink, RouterView } from "vue-router";
import Bouton from "./components/Bouton.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import HeaderGrand from "./components/HeaderGrand.vue";
import FooterDeux from "./components/FooterDeux.vue";

export default {
  components: { Bouton, Footer, Header, RouterView, RouterLink, HeaderGrand, FooterDeux },
};
</script>

<template>
  <header class="text-gray-50">
    <Header class="xl:hidden" />
    <header-grand class="hidden xl:flex" />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <footer-deux class="sm:hidden" />
    <Footer class="hidden sm:flex" />
  </footer>
</template>

