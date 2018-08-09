// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Firebase from 'firebase'
import 'firebase/firestore'

// import firebase config keys
import { config } from './admin/firebaseAuth.js'

let app
export const firebase = Firebase.initializeApp(config)
export const db = firebase.firestore()
const settings = {timestampsInSnapshots: true}
db.settings(settings)

Vue.config.productionTip = false

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
})
