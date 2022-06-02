<template>
  <h2 class="ml-10 mb-8 mt-14 text-4xl">Vous genres musicaux favoris</h2>
  <div class="mx-auto flex w-4/5 flex-row">
    <h3 class="">Genre</h3>
    <div class="">
      <input class="w-1/2 rounded-sm text-gray-950" type="text" placeholder="Nom du genre" v-model="nom" required />
      <button type="button" @click.prevent="createGenre()"><PlusIcon class="w-7" /></button>
    </div>
  </div>
  <h3 class="">Liste des genres déjà existants</h3>
  <div class="mx-auto flex w-4/5 flex-row" v-for="genre in listeGenre" :key="genre">
    <button type="button" @click.prevent="updateGenre(genre)"><RefreshIcon class="w-7" /></button>
    <input
      class="rounded-md bg-gradient-to-b from-pink-600 to-gray-950"
      type="text"
      placeholder="Nom du genre"
      v-model="genre.nom"
      required
    />
    <button type="button" @click.prevent="deleteGenre(genre)"><TrashIcon class="w-7" /></button>
  </div>
</template>
<script>
// Bibliothèque Firestore : import des fonctions
import {
  query,
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { PlusIcon, TrashIcon, RefreshIcon } from "@heroicons/vue/outline";

export default {
  name: "ListeView",
  data() {
    return {
      listeGenre: [],
      nom: null,
      filter: "",
    };
  },
  components: { PlusIcon, TrashIcon, RefreshIcon },

  mounted() {
    // Montage de la vue
    // Appel de la liste des categories synchronisée
    this.getGenre();
  },
  methods: {
    async getGenre() {
      const firestore = getFirestore();
      const dbGenre = collection(firestore, "genre");
      const q = query(dbGenre, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeGenre = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },
    async createGenre() {
      const firestore = getFirestore();
      const dbTick = collection(firestore, "genre");
      const docRef = await addDoc(dbTick, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },
    async updateGenre(genre) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "genre", genre.id);
      await updateDoc(docRef, {
        nom: genre.nom,
      });
    },
    async deleteGenre(genre) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "genre", genre.id);
      await deleteDoc(docRef);
    },
  },
};
</script>

<style scoped>
</style>


