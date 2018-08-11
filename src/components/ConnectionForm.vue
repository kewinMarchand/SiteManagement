<template>
    <section class="login">
      <form class="connection-form">
        <label for="loginEmail" class="sr-text">Entrez votre email</label>
        <input class="connection-input" id="loginEmail" type="email" v-model="email" placeholder="Entrez votre email" autocomplete="email">
        <label for="loginPassword" class="sr-text">Entrez votre mot de passe</label>
        <input class="connection-input" id="loginPassword" type="password" v-model="password" placeholder="Entrez votre mot de passe" autocomplete="current-password">
      </form>
    </section>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'ConnectionForm',
  props: ['mail'],
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
