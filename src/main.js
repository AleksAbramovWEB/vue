import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import dateFilter from "@/filters/date.filters";
import messagePlugin from '@/utils/message.plagin'
// import 'materialize-css/dist/js/materialize.js'

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
 apiKey: "AIzaSyDjCQqyaLiWmZf77b0BOZx9PcIWuA2z2Z4",
 authDomain: "vue-abram.firebaseapp.com",
 databaseURL: "https://vue-abram.firebaseio.com",
 projectId: "vue-abram",
 storageBucket: "vue-abram.appspot.com",
 messagingSenderId: "187418969658",
 appId: "1:187418969658:web:7735ab24b2a0629d275703"
})




Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)



Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged(()=> {
 if (!app) app = new Vue({
                router,
                store,
                render: h => h(App),
              }).$mount('#app')
})


