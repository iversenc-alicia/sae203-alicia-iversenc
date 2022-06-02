<template>
  <header>
    <baniere page="Accueil" />
  </header>
  <main class="mx-5 items-center lg:mx-16 2xl:mx-28">
    <div class="mb-28 grid w-full grid-cols-1 lg:grid-cols-4">
      <div class="mx-auto mb-10 ml-auto sm:my-auto">
        <h2 class="text-4xl font-bold">3 artistes</h2>
        <h2 class="text-4xl font-bold">3 jours</h2>
        <h2 class="text-4xl font-bold">2 scènes</h2>
      </div>
      <img src="/img/martingarrix-clair.webp" class="flex-grow self-stretch object-cover" />
      <img src="/img/djsnake-clair.webp" class="flex-grow self-stretch object-cover" />
      <img src="/img/marshmello-clair.webp" class="flex-grow self-stretch object-cover" />
    </div>
    <a href="./Artistes"><bouton class="mr-auto mt-5 mb-10" nom="Découvrir tous les artistes"> </bouton></a>

    <div class="grid grid-cols-1 justify-items-center gap-10 text-4xl lg:grid-cols-4">
      <h2 class="my-auto mx-auto font-bold">Un programme complet</h2>
      <div>
        <h3 class="mb-10 text-center">Vendredi 8 juillet</h3>
        <div class="max-w-lg skew-y-12 bg-gradient-to-b from-pink-600 to-gray-950 object-contain px-5 py-10 text-center">
          <div class="-skew-y-12">
            <p>Joel Corry</p>
            <p>Timmy Trumpet</p>
            <p>Don Diablo</p>
            <p>Sikdope</p>
          </div>
        </div>
      </div>
      <div>
        <h3 class="mb-10 text-center">Samedi 9 juillet</h3>
        <div class="max-w-lg skew-y-12 bg-gradient-to-b from-pink-600 to-gray-950 object-contain px-5 py-10 text-center">
          <div class="-skew-y-12">
            <p>Martin Garrix</p>
            <p>Gabry Ponte</p>
            <p>DJ SNake</p>
            <p>Showtek</p>
          </div>
        </div>
      </div>
      <div>
        <h3 class="mb-10 text-center">Dimanche 10 juillet</h3>
        <div class="max-w-lg skew-y-12 bg-gradient-to-b from-pink-600 to-gray-950 object-contain px-5 py-10 text-center">
          <div class="-skew-y-12">
            <p>Marshmello</p>
            <p>KSHMR</p>
            <p>Mike Candys</p>
            <p>Nicky Romero</p>
          </div>
        </div>
      </div>
    </div>
    <a href="./Programmation"><bouton class="mr-auto mt-5 mb-10" nom="Découvrir toute la programmation"> </bouton></a>

    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h2 class="sm mx-auto mb-5 text-4xl font-bold lg:my-auto">Découvrir le festival</h2>
        <p class="mb-5 mt-5">
          Pour l’édition de l’été 2022, Electro Bancal débarque avec 12 artistes exceptionnels. Le lieu où se déroule ce festival est le lac
          de la Bancalié pour rendre l’expérience plus singulière.
        </p>
      </div>
      <img src="/public/img/accueil-tagline.webp" alt="" />
    </div>
    <a href="./Festival"><bouton class="mr-auto mt-5 mb-10" nom="Découvrir toute le concept"> </bouton></a>
  </main>
</template>

<script>
import CardRose from "/src/components/cards/CardRose.vue";
import Bouton from "/src/components/Bouton.vue";
import Baniere from "/src/components/Baniere.vue";
import HeaderGrand from "/src/components/HeaderGrand.vue";
export default {
  components: { CardRose, Bouton, Baniere, HeaderGrand },
};
</script>