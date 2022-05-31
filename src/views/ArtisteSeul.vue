<template>
  <header>
    <img class="mx-auto w-3/4" src="/public/img/martingarrix-clair.webp" alt="Martin Garrix" />
  </header>

  <div class="mx-auto mt-10 grid w-3/4 grid-cols-1 sm:grid-cols-2">
    <div class="mx-auto content-center">
      <h2 class="text-center text-4xl font-bold">MARTIN GARRIX</h2>
      <h3 class="text-center text-lg font-semibold">EDM , electro house, deep house, future bass</h3>

      <p class="my-auto mx-auto pt-5 text-base">
        Martin Garrix, de son vrai nom Martijn Gerard Garritsen, est un musicien, producteur de disques et DJ d’origine néerlandaise. Il a
        commencé à jouer de la guitare dès 8 ans. Il a été fortement influencé par un autre DJ connu sous le nom de Tiësto. Martin Garrix a
        téléchargé, et a appris lui-même à composer des morceaux grâce à des logiciels comme Digital Audio Workstation. En 2016, DJ Mag le
        classe premier sur la liste des 100 meilleurs DJ du monde. Depuis le début de sa carrière il a fait des feat avec de nombreux
        artistes tel que AfroJack, Dimitri Vegas, Like Mike, Dillon Francis, Usher…
      </p>
      <p class="mx-auto mt-8 text-center text-4xl font-medium">Labels</p>
      <p class="text-left text-base font-semibold">
        Spinnin' Records (2012-2015), Republic Records (depuis 2014), Sony Music (depuis 2016), Universal Music Group (depuis 2016), STMPD
        RCRDS (depuis 2016).
      </p>
    </div>

    <div class="mx-auto"><class:"" ReseauxArtiste /></div>
  </div>

  <a href="https://www.youtube.com/watch?v=SpIgOm5vFkE/" target="_blank"
    ><img src="/public/img/youtube.webp" border="0" alt="apperçu vidéo Youtube" class="mx-auto mt-20 w-3/4"
  /></a>

  <div class="mx-auto mt-20 grid w-10/12 grid-cols-1 lg:grid-cols-3">
    <img class="p-3" src="/public/img/martin-1.webp" alt="" />
    <img class="p-3" src="/public/img/martin-2.webp" alt="" />
    <img class="p-3" src="/public/img/martin-3.webp" alt="" />
  </div>
</template>

<script>
import Baniere from "/src/components/Baniere.vue";
import ReseauxArtiste from "/src/components/cards/ReseauxArtiste.vue";
export default {
  components: { Baniere, ReseauxArtiste },
};
</script>