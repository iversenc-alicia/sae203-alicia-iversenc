<template>
  <div class="w-100% relative flex h-5/6 flex-col items-center justify-center gap-[67px] overflow-hidden bg-cyan-600 py-8">
    <div class="relative flex h-[94px] flex-shrink-0 flex-grow-0 flex-col items-center justify-center gap-[18px] overflow-hidden">
      <h3 class="flex-shrink-0 flex-grow-0 text-center text-xl font-bold text-gray-50">Inscris-toi à la Newsletter d’Electro Bancal !</h3>

      <div class="flex flex-grow items-start justify-start gap-5 self-stretch overflow-hidden">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-first-name"> Adresse mail </label>
        <input
          class="
            mb-3
            block
            w-full
            appearance-none
            rounded-3xl
            border border-orange-500
            bg-yellow-100
            py-3
            px-4
            leading-tight
            text-gray-700
            focus:bg-yellow-200 focus:outline-none
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
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium text-white" href="../views/Programmation">Programmation</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium text-white" href="../views/Festival">Festival</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium text-white" href="../views/Artistes">Artistes</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium text-white" href="../views/Contact">Contact</a>
      <a class="flex-shrink-0 flex-grow-0 text-center text-xl font-medium text-white" href="../views/MentionsLegales">Mentions légales</a>
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
