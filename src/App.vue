<script>
import { RouterLink, RouterView } from "vue-router";
import Bouton from "./components/Bouton.vue";
import ProgrammeArtistes from "./components/ProgrammeArtistes.vue";
import CardRose from "./components/cards/CardRose.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  components: { Bouton, ProgrammeArtistes, CardRose, Footer, Header, RouterView, RouterLink },
};
</script>

<template>
  <header class="text-gray-50">
    <Header />
    <nav class="bg-Primaire mb-5 w-screen flex-col space-x-6 pt-4">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/Artistes">Artistes</RouterLink>
      <RouterLink to="/ArtisteSeul">Artiste</RouterLink>
      <RouterLink to="/Concert">Concert</RouterLink>
      <RouterLink to="/Festival">Festival</RouterLink>
      <RouterLink to="/MentionsLegales">Mentions légales</RouterLink>
      <br />
      <RouterLink to="/Programmation">Programmation</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>

  <footer>
    <Footer />
  </footer>
</template>

