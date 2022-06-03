<template>
  <Baniere page="Guide de style" />
  <div class="gap-y-5 text-center">
    <h1 class="text-2xl font-semibold">Font</h1>
    <ul>
      <li class="text-base">Inter</li>
      <li class="text-lg">Inter</li>
      <li class="text-xl">Inter</li>
      <li class="text-2xl">Inter</li>
      <li class="text-2xl font-semibold">Inter</li>
      <li class="text-2xl font-semibold">Inter</li>
    </ul>
    <h1 class="mt-10 text-2xl font-semibold">Couleurs</h1>
    <div class="m-6 flex justify-center">
      <div class="h-10 w-40 rounded-l-lg bg-cyan-600"></div>
      <div class="h-10 w-40 bg-purple-900"></div>
      <div class="h-10 w-40 bg-gray-950 stroke-white"></div>
      <div class="h-10 w-40 bg-pink-600"></div>
      <div class="h-10 w-40 bg-cyan-900"></div>
      <div class="h-10 w-40 rounded-r-lg bg-gray-50"></div>
    </div>
  </div>
  <h1 class="font-semiboldtext-center mt-10 text-center text-2xl">Composants</h1>
  <div class="justify-item-center mx-auto grid grid-cols-1 lg:grid-cols-2">
    <card-rose-2 nom="Marshmello" ecoutes="39 040 156 auditeurs par mois" photo="/img/marshmello-fonce.webp" />
    <card-rose nom="Marshmello" scene="Scène Flottante" date="2022-07-09" heure="14:30" photo="/img/marshmello-fonce.webp" />
    <bouton nom="Bonsoir, je suis le bouton"></bouton>
  </div>
  <h1 class="mt-10 text-center text-2xl font-semibold">Icon</h1>
  <div class="mx-auto flex flex-wrap">
    <facebook-footer> </facebook-footer>
    <instagram-footer> </instagram-footer>
    <logo></logo>
    <spotify-footer></spotify-footer>
    <youtube-footer></youtube-footer>
  </div>
  <From />
</template>

<script>
import Baniere from "../components/Baniere.vue";

import CardRose from "../components/cards/CardRose.vue";
import CardRose2 from "../components/cards/CardRose2.vue";
import Form from "../components/Form.vue";
import FacebookFooter from "/src/components/icons/FacebookFooter.vue";
import InstagramFooter from "/src/components/icons/InstagramFooter.vue";
import Logo from "../components/icons/Logo.vue";
import SpotifyFooter from "/src/components/icons/SpotifyFooter.vue";
import YoutubeFooter from "/src/components/icons/YoutubeFooter.vue";
import Bouton from "../components/Bouton.vue";
export default {
  components: { Baniere, CardRose, CardRose2, Form, FacebookFooter, InstagramFooter, SpotifyFooter, YoutubeFooter, Bouton },
};
Logo;
</script>