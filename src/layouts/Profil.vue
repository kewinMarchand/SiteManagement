<template>
  <section class="profil">
    <header class="section-header profil-header">
      <h1 class="section-header-title">Votre Profil</h1>
    </header>
    <div class="profil-body">
      <div class="body-group profil-body-group">
        <figure class="profil-body-figure">
          <img class="profil-body-img"  :src="authUser.photoURL ||  photoDefault" alt="photo de profil" height="60">
          <figcaption class="profil-body-figure-caption profil-body-label">Votre photo de profil:</figcaption>
        </figure>
      </div>
      <div class="body-group profil-body-group">
        <p class="profil-body-text"><span class="profil-body-label">Votre email:</span>{{ authUser.email}}</p>
      </div>
      <div class="body-group profil-body-group">
        <p class="profil-body-text"><span class="profil-body-label">Votre nom d'utilisateur:</span>{{ authUser.displayName || 'Non renseigné'}}</p>
      </div>
    </div>
    <h4 class="section-inter-title">Changez vos informations</h4>
    <form class="form profil-form" @submit.prevent="updateProfile">
      <div class="form-group profil-form-group">
        <label for="displayNameInput">Entrez un nom d'utilisateur</label>
        <input v-model="displayName" class="profil-input" id="displayNameInput" type="text" placeholder="Entrez un nom d'utilisateur">
      </div>
      <div class="form-group profil-form-group">
        <label for="photoURLInput">Entrez l'adresse d'une image</label>
        <input v-model="photoURL" class="profil-input" id="photoURLInput" type="text" placeholder="Entrez l'adresse d'une image">
      </div>
      <div class="form-action profil-form-action">
        <button class="btn" type="submit">Mettre à jour le profil</button>
      </div>
    </form>
    <transition name="fade">
      <div class="alert alert-info" v-if="message">{{ message }}</div>
    </transition>
  </section>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Profil',
  components: {},
  data () {
    return {
      authUser: [],
      displayName: null,
      photoURL: null,
      photoDefault: 'http://www.collegiosanluigi.it/wp-content/uploads/2015/04/male-silhouette.jpg',
      message: ''
    }
  },
  methods: {
    updateProfile () {
      this.authUser.updateProfile({
        displayName: this.displayName,
        photoURL: this.photoURL
      })
      this.message = 'Vos modifications sont enregistrées mais vous devez actualiser la page pour voir les changements'
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      this.authUser = user
      if (user) {
        this.displayName = user.displayName
        this.photoURL = user.photoURL
      }
    })
  }
}
</script>

<style scoped>
.profil-body {
  margin: 3rem 0;
  text-align: left;
}
.profil-body-group {
  border-bottom: 1px solid var(--primaryColor);
  padding: 3rem 0;
  text-align: right;
}
.profil-body-figure {
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.profil-body-label {
  float: left;
  margin: 0 3rem 0 0;
  font-style: italic;
}
.form {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 3rem;
}
.form-group {
  grid-column: 1 / -1;
}
@media screen and (min-width: 1024px) {
  .form-group {
    grid-column: span 6;
  }
}
.form-action {
  grid-column: 1 / -1;
}
</style>
