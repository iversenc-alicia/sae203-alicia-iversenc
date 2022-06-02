<template>
  <header>
    <baniere page="Artistes" />
  </header>
  <main class="mx-auto">
    <h2 class="ml-10 mb-8 mt-14 text-4xl">Les incontournables</h2>
    <div class="mx-auto grid grid-cols-1 justify-items-center gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <a href="./ArtisteSeul"
        ><card-rose-2 nom="Martin Garrix" ecoutes="23 067 320 auditeurs par mois" photo="/img/martingarrix-fonce.webp"
      /></a>
      <a href="./ArtisteSeul"
        ><card-rose-2 nom="Marshmello" ecoutes="39 040 156 auditeurs par mois" photo="/img/marshmello-fonce.webp"
      /></a>
      <a href="./ArtisteSeul"
        ><card-rose-2 nom="Gabry Ponte" ecoutes="15 302 759 auditeurs par mois" photo="/img/gabryponte-fone.webp"
      /></a>
      <a href="./ArtisteSeul"><card-rose-2 nom="DJ Snake" ecoutes="28 818 882 auditeurs par mois" photo="/img/djsnake-fonce.webp" /></a>
      <a href="./ArtisteSeul"
        ><card-rose-2 nom="Timmy Trumpet" ecoutes="10 029 125 auditeurs par mois" photo="/img/timmytrumpet-fonce.webp"
      /></a>
      <a href="./ArtisteSeul"><card-rose-2 nom="Joel Corry" ecoutes="21 221 035 auditeurs par mois" photo="/img/joelcorry-fonce.webp" /></a>
    </div>
    <h2 class="ml-10 mb-8 mt-14 text-4xl">A ne pas rater</h2>
    <div class="mx-auto grid grid-cols-1 justify-items-center gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <a href="./ArtisteSeul"><card-rose-2 nom="Don Diablo" ecoutes="6 938 751 auditeurs par mois" photo="/img/dondiablo-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose-2 nom="Sikdope" ecoutes="685 173 auditeurs par mois" photo="/img/sikdope-fonce.webp" /></a>
      <a href="./ArtisteSeul"><card-rose-2 nom="KSHMR" ecoutes="6 885 032 auditeurs par mois" photo="/img/kshmr-fonce.jpg" /></a>

      <a href="./ArtisteSeul"
        ><card-rose-2 nom="Mike Candys" ecoutes="3 500 139 auditeurs par mois" photo="/img/mikecandys-fonce.webp"
      /></a>
      <a href="./ArtisteSeul"
        ><card-rose-2 nom="Nicky Romero" ecoutes="5 498 167 auditeurs par mois" photo="/img/nickyromero-fonce.webp"
      /></a>
      <a href="./ArtisteSeul"><card-rose-2 nom="Showtek" ecoutes="4 384 856 auditeurs par mois" photo="/img/showtek-fonce.webp" /></a>

      <RouterLink to="/ArtisteSeul" v-for="art in listeArtistes" :key="art"
        ><card-rose-2 :nom="art.nom" :photo="art.photo" :ecoutes="art.ecoutes"
      /></RouterLink>
    </div>
  </main>

  <a class="mr-10 ml-10 mt-10 flex justify-end text-2xl font-semibold" href="./Programmation">→ Voir toute la programmation</a>
</template>

<script>
import Baniere from "/src/components/Baniere.vue";
import ArtisteCard from "/src/components/cards/ArtisteCard.vue";
import CardRose2 from "../components/cards/CardRose2.vue";
import {
  getFirestore,
  collection,
  doc,
  query,
  orderBy,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default {
  components: {
    Baniere,
    ArtisteCard,
    CardRose2,
  },
  data() {
    return {
      listeArtistes: [],
    };
  },
  mounted() {
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      const firestore = getFirestore();
      const dbArt = collection(firestore, "Artistes");
      const q = query(dbArt, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtistes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtistes.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artistes/" + personne.photo);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.photo = url;
            })
            .catch((error) => {
              console.log("erreur download url", error);
            });
        });
      });
    },
  },
};
</script>