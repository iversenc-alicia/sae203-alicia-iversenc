<template>
  <h2>Ajouter un artiste</h2>
  <form @submit.prevent="createArtiste">
    <img :src="imageData" class="w-1/2" />
    <div class="">
      <div class="flex h-10 w-1/2 overflow-hidden rounded-sm">
        <div class="flex items-center justify-center from-pink-600 to-gray-950 px-5 text-gray-50">Nom</div>
        <input class="w-1/2 bg-slate-100 pl-2" type="text" placeholder="Nom de l'artistefav" v-model="artistefav.nom" required />
      </div>
      <div class="flex h-10 overflow-hidden rounded-sm">
        <div class="flex items-center justify-center border-[1px] from-pink-600 to-gray-950 px-5 text-gray-50">Photo</div>
        <div class="relative w-full">
          <input type="file" class="relative w-full" ref="file" id="file" @change="previewImage" />
          <label class="text-gray absolute left-0 top-0 bottom-0 flex w-1/2 items-center justify-center bg-gray-50 pl-2" for="file"
            >Sélectionner l'image</label
          >
        </div>
      </div>
    </div>
    <div class="grid w-full grid-cols-2 place-items-center">
      <button type="button" @click.prevent="createArtistefav(artistefav)">Ajouter</button>
    </div>
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
