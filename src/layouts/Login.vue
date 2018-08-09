<template>
    <section class="login">
        <header class="section-header">
            <h3 class="section-header-title">Connexion</h3>
        </header>
        <form class="connection-form">
          <label for="connectionEmail" class="sr-text">Entrez votre email</label>
          <input class="connection-input" id="connectionEmail" type="email" v-model="email" placeholder="Entrez votre email" autocomplete="email">
          <label for="connectionEmail" class="sr-text">Entrez votre mot de passe</label>
          <input class="connection-input" id="connectionPassword" type="password" v-model="password" placeholder="Entrez votre mot de passe" autocomplete="current-password">
          <button class="btn connection-btn" type="button" @click="signIn">Je me connecte</button>
        </form>
        <transition name="fade">
          <span class="connection-alert" v-if="errMessage">{{ errMessage }}</span>
        </transition>
        <p class="connection-go-to">Pas encore inscrit ? <router-link to="/sign-up">Créez un compte</router-link></p>
    </section>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      errMessage: ''
    }
  },
  methods: {
    signIn () {
      this.errMessage = ''
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('accueil')
        },
        (err) => {
          this.errMessage = err.message
        }
      )
    }
  }
}
</script>

<style scoped>
</style>
