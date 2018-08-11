<template>
    <section class="signUp">
        <header class="section-header">
            <h3 class="section-header-title">Créez un compte</h3>
        </header>
        <form class="connection-form">
          <label for="signUpEmail" class="sr-text">Entrez votre email</label>
          <input class="connection-input" id="signUpEmail" type="email" v-model="email" placeholder="Votre email" autocomplete="email">
          <label for="signUpPassword" class="sr-text">Entrez votre mot de passe</label>
          <input class="connection-input" id="signUpPassword" type="password" v-model="password" placeholder="Votre mot de passe" autocomplete="current-password">
          <button class="btn" type="button" @click="signUp">Je m'inscris</button>
        </form>
        <transition name="fade">
          <span class="alert alert-error connection-alert" v-if="errMessage">{{ errMessage }}</span>
        </transition>
        <p class="connection-go-to">Retournez à la page de <router-link to="/login">connexion</router-link></p>
    </section>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: '',
      errMessage: ''
    }
  },
  methods: {
    signUp () {
      this.errMessage = ''
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('profil')
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
