<template>
  <h2 class="ml-10 mb-8 mt-14 text-4xl">Ajouter un artiste</h2>
  <form @submit.prevent="createArtiste">
    <img :src="imageData" class="w-1/2" />
    <div class="ml-10 sm:ml-20">
      <div class="mb-10 flex h-10 justify-items-center">
        <div class="text-n m flex items-center justify-center bg-gradient-to-b from-pink-600 to-gray-950 px-5">Nom</div>
        <input class="w-1/2 bg-slate-100 pl-2 text-black" type="text" placeholder="Nom de l'artiste" v-model="artistefav.nom" required />
      </div>
      <div class="flex h-10 overflow-hidden rounded-sm">
        <div class="relative w-full">
          <input type="file" class="relative w-full" ref="file" id="file" @change="previewImage" />
        </div>
      </div>
    </div>
    <button
      class="ml-10 mt-10 rounded-sm bg-gray-50 px-5 py-3 text-black sm:ml-20"
      type="button"
      @click.prevent="createArtistefav(artistefav)"
    >
      Ajouter
    </button>
  </form>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { getStorage, ref, getDownloadURL, uploadString } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
export default {
  data() {
    return {
      imageData: null,
      artistefav: {
        nom: null,
        image: null,
      },
    };
  },
  mounted() {},
  methods: {
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.artistefav.image = this.file.name;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    async createArtistefav() {
      const storage = getStorage();
      const refStorage = ref(storage, "artistefav/" + this.artistefav.image);
      console.log("refStorage", refStorage);
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");
        const db = getFirestore();
        const docRef = addDoc(collection(db, "artistefav"), this.artistefav);
      });
      this.$router.push("/PropositionsArtistes");
    },
  },
};
</script>
