<template>
  <baniere page="Programmation" />
  <main class="justify-items-center">
    <h2 class="ml-10 mb-8 mt-14 text-4xl">Vendredi 8 Juillet</h2>
    <div class="grid grid-cols-1 justify-items-center gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <RouterLink to="/Concert" v-for="con in Jour1" :key="con"
        ><card-rose :nom="con.nom" :photo="con.photo" :date="con.date" :heure="con.heure" :scene="con.scene"
      /></RouterLink>
    </div>
    <h2 class="ml-10 mb-8 mt-14 text-4xl">Samedi 9 Juillet</h2>
    <div class="mx-10 grid grid-cols-1 justify-items-center gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <RouterLink to="/Concert" v-for="con in Jour2" :key="con"
        ><card-rose :nom="con.nom" :photo="con.photo" :date="con.date" :heure="con.heure" :scene="con.scene"
      /></RouterLink>
    </div>
    <h2 class="ml-10 mb-8 mt-14 text-4xl">Dimanche 10 Juillet</h2>
    <div class="mx-10 grid grid-cols-1 justify-items-center gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <RouterLink to="/Concert" v-for="con in Jour3" :key="con"
        ><card-rose :nom="con.nom" :photo="con.photo" :date="con.date" :heure="con.heure" :scene="con.scene"
      /></RouterLink>
    </div>
  </main>

  <a class="my-20 mr-6 flex justify-end text-2xl font-semibold" href="./Artistes">→ Voir tous les artistes</a>
</template>


<script>
import CardRose from "../components/cards/CardRose.vue";
import Baniere from "/src/components/Baniere.vue";
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
    CardRose,
  },
  data() {
    return {
      listeConcerts: [],
      qJour1: 1,
      qJour2: 2,
      qJour3: 3,
    };
  },
  mounted() {
    this.getConcerts();
  },
  methods: {
    async getConcerts() {
      const firestore = getFirestore();
      const dbCon = collection(firestore, "Concerts");
      const q = query(dbCon, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeConcerts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeConcerts.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "concerts/" + personne.photo);
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
  computed: {
    Jour1() {
      let query = this.qJour1;
      return this.listeConcerts.filter(function (con) {
        return con.jour.includes(query);
      });
    },
    Jour2() {
      let query = this.qJour2;
      return this.listeConcerts.filter(function (con) {
        return con.jour.includes(query);
      });
    },
    Jour3() {
      let query = this.qJour3;
      return this.listeConcerts.filter(function (con) {
        return con.jour.includes(query);
      });
    },
  },
};
</script>
