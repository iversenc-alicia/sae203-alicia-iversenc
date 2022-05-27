import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Artistes from '../views/Artistes.vue'
import ArtisteSeul from '../views/ArtisteSeul.vue'
import Concert from '../views/Concert.vue'
import Contact from '../views/Contact.vue'
import Festival from '../views/Festival.vue'
import MentionsLegales from '../views/MentionsLegales.vue'
import Programmation from '../views/Programmation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/', name: 'Artistes', component: Artistes },
    { path: '/', name: 'ArtisteSeul', component: ArtisteSeul },
    { path: '/', name: 'Concert', component: Concert },
    { path: '/', name: 'Contact', component: Contact },
    { path: '/', name: 'Festival', component: Festival },
    { path: '/', name: 'MestionsLegales', component: MentionsLegales },
    { path: '/', name: 'Programmation', component: Programmation },


  ]
})

export default router
