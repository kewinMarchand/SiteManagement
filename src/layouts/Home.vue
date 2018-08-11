<template>
  <section class="home">
    <header class="section-header">
      <h1 class="section-header-title">{{ appTitle }}</h1>
      <h2 class="section-header-subtitle">{{ appSubtitle }}</h2>
    </header>
    <p>Bonjour {{ authUser.displayName || authUser.email}}</p>
  </section>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      appTitle: 'Site management',
      appSubtitle: 'A Vue.js / Firebase project dedicated to site management',
      authUser: ''
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      this.authUser = user
    })
  }
}
</script>

<style scoped>
</style>
