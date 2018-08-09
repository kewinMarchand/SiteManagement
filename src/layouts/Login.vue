<template>
    <section class="login">
        <header class="section-header">
            <h3 class="section-header-title">Connexion</h3>
        </header>
        <form class="connection-form">
            <input class="connection-input" type="email" v-model="email" placeholder="Votre email" autocomplete="email">
            <input class="connection-input" type="password" v-model="password" placeholder="Votre mot de passe" autocomplete="current-password">
            <button class="connection-btn" type="button" @click="signIn">Je me connecte</button>
        </form>
        <span class="connection-alert" v-if="errMessage">{{ errMessage }}</span>
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
