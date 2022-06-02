<template>
  <baniere page="Artistes" />

  <main class="mx-auto">
    <h2 class="ml-10 mb-8 mt-14 text-4xl">Les incontournables</h2>
    <div class="mx-auto grid grid-cols-1 justify-items-center gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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