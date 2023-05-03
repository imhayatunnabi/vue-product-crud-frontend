import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import router from '../router'
import App from './App.vue'
library.add(faUserSecret)


createApp(App).component('font-awesome-icon', FontAwesomeIcon)
.use(router).mount('#app')
