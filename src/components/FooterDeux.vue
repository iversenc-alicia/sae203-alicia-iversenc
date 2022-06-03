<template>
  <div class="mt-40 flex w-full flex-col items-center justify-center gap-12 overflow-hidden bg-cyan-600 py-8">
    <div class="">
      <h3 class="mb-5 text-center text-xl font-bold">Inscris-toi à la Newsletter d’Electro Bancal !</h3>

      <div class="mx-3">
        <label class="" for="grid-first-name"></label>
        <input
          class="
            mb-3
            block
            w-full
            appearance-none
            rounded-lg
            border border-gray-500
            bg-slate-50
            py-3
            px-4
            leading-tight
            text-gray-500
            focus:bg-slate-300 focus:outline-none
          "
          id="grid-first-name"
          type="text"
          placeholder="adressemail@mail.com"
        />
        <div class="gap-2.5 rounded-[3px] bg-fuchsia-900 py-2">
          <p class="flex-shrink-0 flex-grow-0 text-center font-semibold text-slate-50 lg:text-2xl">Je m’inscris !</p>
        </div>
      </div>
    </div>
    <Logo />
    <div class="grid grid-cols-2 justify-center gap-5">
      <a class="px-2" href="https://open.spotify.com/"><SpotifyFooter /></a>
      <a class="px-2" href="https://www.instagram.com/"><InstagramFooter /></a>
      <a class="px-2" href="https://www.facebook.com/"><FacebookFooter /></a>
      <a class="px-2" href="https://www.youtube.com/"><YoutubeFooter /></a>
    </div>
    <div class="mx-auto grid grid-cols-2 gap-x-10 gap-y-2 text-left font-medium">
      <a href="./Programmation">Programmation</a>
      <a href="./Festival">Festival</a>
      <a href="./Artistes">Artistes</a>
      <a href="./Contact">Contact</a>
      <a href="./MentionsLegales">Mentions légales</a>
      <a href="./GuideDeStyle">Guide de style</a>
      <a href="./PropositionsArtistes">Vos artistes</a>
      <a href="./Propositions">Vos genres musicaux</a>
    </div>
  </div>
</template>

<script>
import YoutubeFooter from "./icons/YoutubeFooter.vue";
import FacebookFooter from "./icons/FacebookFooter.vue";
import InstagramFooter from "./icons/InstagramFooter.vue";
import SpotifyFooter from "./icons/SpotifyFooter.vue";
import Logo from "./icons/Logo.vue";
export default {
  components: { YoutubeFooter, FacebookFooter, InstagramFooter, SpotifyFooter, Logo },
};
</script>
