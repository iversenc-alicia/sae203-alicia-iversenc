<template>
  <div>
    <header>
      <img class="mx-auto w-3/4" src="/img/martingarrix-clair.webp" alt="Martin Garrix" />
    </header>

    <div class="mx-auto mt-10 grid w-3/4 grid-cols-1 sm:grid-cols-2">
      <div class="mx-auto content-center">
        <h2 class="text-center text-4xl font-bold">MARTIN GARRIX</h2>
        <h3 class="text-center text-lg font-semibold">EDM , electro house, deep house, future bass</h3>

        <p class="my-auto mx-auto pt-5 text-base">
          Martin Garrix, de son vrai nom Martijn Gerard Garritsen, est un musicien, producteur de disques et DJ d’origine néerlandaise. Il a
          commencé à jouer de la guitare dès 8 ans. Il a été fortement influencé par un autre DJ connu sous le nom de Tiësto. Martin Garrix
          a téléchargé, et a appris lui-même à composer des morceaux grâce à des logiciels comme Digital Audio Workstation. En 2016, DJ Mag
          le classe premier sur la liste des 100 meilleurs DJ du monde. Depuis le début de sa carrière il a fait des feat avec de nombreux
          artistes tel que AfroJack, Dimitri Vegas, Like Mike, Dillon Francis, Usher…
        </p>
        <p class="mb-5 mt-8 text-center text-4xl font-medium sm:mx-auto">Labels</p>
        <p class="text-left text-base font-semibold">
          Spinnin' Records (2012-2015), Republic Records (depuis 2014), Sony Music (depuis 2016), Universal Music Group (depuis 2016), STMPD
          RCRDS (depuis 2016).
        </p>
      </div>

      <div class="mt-10 sm:mx-auto"><ReseauxArtiste /></div>
    </div>

    <a href="https://www.youtube.com/watch?v=SpIgOm5vFkE/" target="_blank"
      ><img src="/img/youtube.webp" border="0" alt="apperçu vidéo Youtube" class="mx-auto mt-20 w-3/4"
    /></a>
  </div>
  <h2 class="my-14 ml-10 mt-14 text-4xl font-bold">Voir les artistes similaires</h2>
  <div class="relative flex w-full snap-x overflow-x-auto pb-14">
    <div class="w-1/2 shrink-0 rounded-lg shadow-xl">
      <img src="/img/card-artiste-1.png" alt="image concert" />
    </div>
    <div class="w-1/2 shrink-0 rounded-lg shadow-xl">
      <img src="/img/card-artiste-2.png" alt="image concert" />
    </div>
    <div class="w-1/2 shrink-0 rounded-lg shadow-xl">
      <img src="/img/card-artiste-3.png" alt="image concert" />
    </div>
    <div class="w-1/2 shrink-0 rounded-lg shadow-xl">
      <img src="/img/card-artiste-4.png" alt="image concert" />
    </div>
    <div class="w-1/2 shrink-0 rounded-lg shadow-xl">
      <img src="/img/card-artiste-5.png" alt="image concert" />
    </div>
    <div class="w-1/2 shrink-0 rounded-lg shadow-xl">
      <img src="/img/card-artiste-6.png" alt="image concert" />
    </div>
    <div class="w-1/2 shrink-0 rounded-lg shadow-xl">
      <img src="/img/card-artiste-7.png" alt="image concert" />
    </div>
    <div class="w-1/2 shrink-0 rounded-lg shadow-xl">
      <img src="/img/card-artiste-8.png" alt="image concert" />
    </div>
    <div class="w-1/2 shrink-0 rounded-lg shadow-xl">
      <img src="/img/card-artiste-9.png" alt="image concert" />
    </div>
    <div class="w-1/2 shrink-0 rounded-lg shadow-xl">
      <img src="/img/card-artiste-10.png" alt="image concert" />
    </div>
    <div class="w-1/2 shrink-0 rounded-lg shadow-xl">
      <img src="/img/card-artiste-11.png" alt="image concert" />
    </div>
    <div class="w-1/2 shrink-0 rounded-lg shadow-xl">
      <img src="/img/card-artiste-12.png" alt="image concert" />
    </div>
  </div>
</template>

<script>
import CardRose from "../components/cards/CardRose.vue";
import Baniere from "/src/components/Baniere.vue";
import ReseauxArtiste from "/src/components/cards/ReseauxArtiste.vue";
export default {
  components: { Baniere, ReseauxArtiste, CardRose },
};
</script>