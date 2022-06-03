<template>
  <div class="mx-auto w-1/2">
    <form @submit.prevent="updateArtistefav">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="grid place-items-center">
          <img :src="imageData" class="w-1/2" />
        </div>
        <div class="grid grid-cols-1 gap-14">
          <div class="flex h-10 rounded-sm">
            <div class="flex items-center justify-center rounded-sm bg-cyan-600 px-5">Nom</div>
            <input class="w-full bg-gray-50 pl-2 text-black" type="text" placeholder="Nom de l'artiste" v-model="artistefav.nom" required />
          </div>

          <div class="flex h-10 overflow-hidden rounded-sm text-black">
            <div class="flex items-center justify-center bg-cyan-600 px-5">Photo</div>
            <div class="relative w-full">
              <input type="file" class="relative w-full rounded-sm bg-gray-50 pl-2" ref="file" id="file" @change="previewImage" />
              <label class="absolute left-0 top-0 bottom-0 flex w-full items-center justify-center bg-slate-100 pl-2" for="file"
                >Sélectionner l'image</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="grid w-full grid-cols-2 place-items-center">
        <button class="w-fit bg-slate-100 px-6 py-3 text-black" type="submit">Modifier</button>
        <button class="w-fit bg-slate-100 px-6 py-3 text-black" type="button">
          <RouterLink to="/PropositionsArtiste">Annuler</RouterLink>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
export default {
  data() {
    return {
      imageData: null,
      artistefav: {
        nom: null,
        image: null,
      },

      refArtistefav: null,
      imgModifiee: false,
      photoActuelle: null,
    };
  },
  mounted() {
    this.getArtistefav(this.$route.params.id);
  },
  methods: {
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.artistefav.image = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    async getArtistefav(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artistefav", id);
      this.refArtistefav = await getDoc(docRef);
      if (this.refArtistefav.exists()) {
        this.artistefav = this.refArtistefav.data();
        this.photoActuelle = this.artistefav.image;
      } else {
        this.console.log("artiste inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "artistefav/" + this.artistefav.image);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadurl", error);
        });
    },

    async updateArtistefav() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "artistefav/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "artistefav/" + this.artistefav.image);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.artistefav.image);
        });
      }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "artistefav", this.$route.params.id), this.artistefav);
      this.$router.push("/PropositionsArtistes");
    },
  },
};
</script>
