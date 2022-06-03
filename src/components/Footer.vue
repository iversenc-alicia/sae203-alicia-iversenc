<template>
  <div class="relative mt-40 flex h-5/6 w-full flex-col items-center justify-center gap-[67px] overflow-hidden bg-cyan-600 py-8">
    <div class="relative flex h-[94px] flex-shrink-0 flex-grow-0 flex-col items-center justify-center gap-[18px] overflow-hidden">
      <h3 class="flex-shrink-0 flex-grow-0 text-center text-xl font-bold text-gray-50">Inscris-toi à la Newsletter d’Electro Bancal !</h3>

      <div class="flex flex-grow items-start justify-start gap-5 self-stretch overflow-hidden">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-first-name"></label>
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
        <div class="relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2.5 rounded-[3px] bg-fuchsia-900 px-3 py-2">
          <p class="flex-shrink-0 flex-grow-0 text-center text-2xl font-semibold text-slate-50">Je m’inscris !</p>
        </div>
      </div>
    </div>
    <Logo />
    <div class="relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-[50px]">
      <a href="https://open.spotify.com/"><SpotifyFooter /></a>
      <a href="https://www.instagram.com/"><InstagramFooter /></a>
      <a href="https://www.facebook.com/"><FacebookFooter /></a>
      <a href="https://www.youtube.com/"><YoutubeFooter /></a>
    </div>
    <div class="relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-8 self-stretch">
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium" href=".Programmation">Programmation</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium" href=".Festival">Festival</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium" href="./Artistes">Artistes</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium" href="./Contact">Contact</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium" href="./MentionsLegales">Mentions légales</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium" href="./GuideDeStyle">Style Guide</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium" href="./PropositionsArtistes">Vos artistes</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium" href="./Propositions">Vos genres musicaux</a>
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
