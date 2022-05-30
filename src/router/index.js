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
    { path: '/Artistes', name: 'Artistes', component: Artistes },
    { path: '/ArtisteSeul', name: 'ArtisteSeul', component: ArtisteSeul },
    { path: '/Concert', name: 'Concert', component: Concert },
    { path: '/Contact', name: 'Contact', component: Contact },
    { path: '/Festival', name: 'Festival', component: Festival },
    { path: '/MentionsLegales', name: 'MentionsLegales', component: MentionsLegales },
    { path: '/Programmation', name: 'Programmation', component: Programmation },


  ]
})

export default router
