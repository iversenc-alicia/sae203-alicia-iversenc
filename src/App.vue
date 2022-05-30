<script>
import { RouterLink, RouterView } from "vue-router";
import Bouton from "./components/Bouton.vue";
import ProgrammeArtistes from "./components/ProgrammeArtistes.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  components: { Bouton, ProgrammeArtistes, Footer, Header, RouterView, RouterLink },
};
</script>

<template>
  <header class="text-gray-50">
    <Header />
  </header>
  <main>
    <RouterView />
  </main>

  <footer>
    <Footer />
  </footer>
</template>

