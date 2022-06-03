<template>
  <div class="grid grid-cols-1 gap-8 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <div to="/Artiste" v-for="art in listeArtistefav" :key="art">
      <card-3 :id="art.id" :nom="art.nom" :image="art.image"></card-3>
    </div>
    <RouterLink to="Create"><PlusCircleIcon /></RouterLink>
  </div>
</template>

<script>
import Card3 from "../components/cards/Card3.vue";
import { TrashIcon, PencilAltIcon, PlusCircleIcon } from "@heroicons/vue/outline";
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
    Card3,
    TrashIcon,
    PencilAltIcon,
    PlusCircleIcon,
  },
  data() {
    return {
      listeArtistefav: [],
    };
  },
  mounted() {
    this.getArtistefav();
  },
  methods: {
    async getArtistefav() {
      const firestore = getFirestore();
      const dbArt = collection(firestore, "artistefav");
      const q = query(dbArt, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtistefav = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtistefav.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artistefav/" + personne.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.image = url;
            })
            .catch((error) => {
              console.log("erreur download url", error);
            });
        });
      });
    },
  },
  computed: {
    searchByDay() {
      let query = this.query;
      return this.ListeArtistefav.filter(function (art) {
        return art.jour.includes(query);
      });
    },
  },
};
</script>