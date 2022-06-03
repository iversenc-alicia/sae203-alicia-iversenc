<template>
  <div class="flex-col justify-center">
    <form @submit.prevent="deleteArtistefav">
      <div class="grid grid-cols-1 gap-4">
        <div class="grid place-items-center">
          <img :src="photoActuelle" class="w-1/2" />
        </div>
        <div class="grid grid-cols-1 gap-14">
          <div class="flex h-10 overflow-hidden rounded-sm text-black">
            <div class="flex items-center justify-center bg-gradient-to-b from-pink-600 to-gray-950 px-5 text-gray-50">Nom</div>
            <input class="w-full bg-gray-50 pl-2" type="text" placeholder="Nom de l'artiste" v-model="artistefav.nom" disabled />
          </div>
        </div>
      </div>
      <div class="mt-5 grid w-full grid-cols-2 place-items-center">
        <button class="w-fit bg-gray-100 px-6 py-3 text-black" type="submit">Supprimer</button>
        <button class="w-fit bg-gray-100 px-6 py-3 text-black" type="button">
          <RouterLink to="/PropositionsArtistes">Annuler</RouterLink>
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { getFirestore, doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
export default {
  data() {
    return {
      artistefav: {
        nom: null,
        scene: null,
        image: null,
      },

      refArtistefav: null,
      photoActuelle: null,
    };
  },
  mounted() {
    this.getArtistefav(this.$route.params.id);
  },
  methods: {
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
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadurl", error);
        });
    },

    async deleteArtistefav() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "artistefav", this.$route.params.id));
      const storage = getStorage();
      let docRef = ref(storage, "artistefav/" + this.artistefav.image);
      deleteObject(docRef);
      this.$router.push("/PropositionsArtistes");
    },
  },
};
</script>
